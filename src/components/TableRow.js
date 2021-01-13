import React from "react";
import { MDBTableBody } from "mdbreact";

export default (props) => {
  const rows = (
    <tr>
      <td>Record Number</td>
      <td>Nombre Y Apellidos</td>
      <td>Visa Type</td>
      <td>Email</td>
      <td>Caso Cerrado</td>
      <td>Expedite</td>
      <td>Entrevista Date</td>
    </tr>
  );

  return <MDBTableBody>{rows}</MDBTableBody>;
};
