import React from "react";
import { MDBDataTable } from "mdbreact";
import DatabaseFeed from "../Utils/DatabaseFeed";
import "./components.css";

export default (props) => {
  return (
    <div>
      <MDBDataTable
        hover
        bordered
        small
        striped
        data={DatabaseFeed.data}
        className="d-flex flex-column d-inline"
      />
    </div>
  );
};
