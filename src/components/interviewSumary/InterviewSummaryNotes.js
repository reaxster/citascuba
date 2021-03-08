import React from "react";
import { MDBIcon } from "mdbreact";

export default () => {
  return (
    <div className="justifyText warningBorder p-3 mb-5">
      <div className="d-flex justify-content-center">
        <MDBIcon icon="info-circle" size="2x" style={{ color: "#FF6F00" }} />
        <h4 className="ml-2">
          <strong>INFORMACION</strong>
        </h4>
      </div>
      <hr />
      <p>
        <strong>NOTE: </strong>En esta seccion usted podra encontrar un resumen
        de ultima entrevista registrada al igual que la cantidad de entrevistas
        dada para ese mismo mes en una misma categoria.
      </p>
      <p>
        <strong>Necesita mas informacion?</strong> No dude en contactarnos
      </p>
    </div>
  );
};
