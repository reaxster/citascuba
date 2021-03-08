import React, { useState, useEffect } from "react";
import { MDBDataTableV5 } from "mdbreact";
import DatabaseFeed from "../../Utils/DatabaseFeed";
import axios from "axios";
import "../components.css";
import TableNotes from "./TableNotes";
import Loading from "../loading/Loading";

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
            Escriba en la Barra de Búsqueda los Datos de su Interés
          </strong>
        </h5>
        <hr />
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
    <div>
      <hr />
      <h4>
        <strong>Verifique si su Record ha Sido Añadido </strong>
      </h4>
      <TableNotes />
      <hr />
      {table}
      <hr />
    </div>
  );
};
