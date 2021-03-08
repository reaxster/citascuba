import React from "react";
import { MDBTableBody } from "mdbreact";

export default (props) => {
  const rows = (
    <tr>
      <td>07261996</td>
      <td>H2B</td>
      <td>05/18/2021</td>
      <td>NO</td>
      <td>10/30/2020</td>
    </tr>
  );

  return <MDBTableBody>{rows}</MDBTableBody>;
};
