import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import TableRow from "./TableRow";

export default (props) => {
  return (
    <MDBTable hover>
      <MDBTableHead>
        <tr>
          <th>#</th>
          <th>First</th>
          <th>Last</th>
          <th>Handle</th>
        </tr>
      </MDBTableHead>
      <TableRow />
    </MDBTable>
  );
};
