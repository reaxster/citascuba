import React, { useState, useEffect } from "react";
import { MDBDataTableV5 } from "mdbreact";
import DatabaseFeed from "../Utils/DatabaseFeed";
import axios from "axios";
import "./components.css";
import TableNotes from "./TableNotes";
import Loading from "./Loading";

export default (props) => {
  console.log("--------------RENDERING TABLE PAGE--------------");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let componentIsMounted = true;
    const getAll = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/cases/`
        );
        console.log("DATA HAS BEEN RETRIEVED SUCCESSFULLY ON  TABLE");
        console.log(res.data);

        if (componentIsMounted) {
          setData(res.data.cases);
          setLoading(false);
        }
      } catch (err) {
        // Handle Error Here
        console.log("ERROR HAS OCCURED WHEN RETRIEVING TABLE VALUES");
        console.error(err);
      }
    };
    getAll();
    return () => (componentIsMounted = false);
  }, []);

  let table = <Loading />;

  if (!loading) {
    const dataTable = {
      columns: DatabaseFeed.columns,
      rows: data,
    };

    table = (
      <div>
        <h5>
          <strong>
            Entre El dato que desea buscar en la barra de busqueda
          </strong>
        </h5>
        <MDBDataTableV5
          hover
          bordered
          striped
          small
          data={dataTable}
          materialSearch
          searchTop
          searchBottom={false}
          className="d-flex flex-column d-inline"
        />
      </div>
    );
  }

  return (
    <div className="my-5">
      <h3>
        <strong>Verifique Si Su Record ah sido Añadido</strong>
      </h3>
      <TableNotes />
      {table}
    </div>
  );
};
