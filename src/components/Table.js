import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import DatabaseFeed from "../Utils/DatabaseFeed";
import axios from "axios";
import "./components.css";
import TableNotes from "./TableNotes";
import Loading from "./Loading";

export default (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let componentIsMounted = true;
    const getAll = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_BACKEND_URL + "/cases/"
        );
        // console.log(res.data);
        if (componentIsMounted) {
          setData(res.data);
          setLoading(false);
        }

        const res2 = await axios.get(
          "https://us-central1-citascuba-test.cloudfunctions.net/interviewsSummary/"
        );
        console.log(res2.data);
      } catch (err) {
        // Handle Error Here
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
      <MDBDataTable
        hover
        bordered
        small
        striped
        data={dataTable}
        className="d-flex flex-column d-inline"
      />
    );
  }

  return (
    <div className="m-5">
      <h3>
        <strong>Verifique Si Su Record ah sido Añadido</strong>
      </h3>
      <TableNotes />
      {table}
    </div>
  );
};
