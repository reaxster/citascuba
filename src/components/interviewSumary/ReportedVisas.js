import React from "react";
import { MDBCard, MDBCardBody, MDBCol } from "mdbreact";

export default (props) => {
  console.log(props.data);
  return (
    <div className="mb-4">
      <MDBCol>
        <MDBCard>
          <div style={{ background: "#880E4F" }} className="p-2">
            <h2 style={{ color: "#fff" }}>
              <strong>Visa {props.data.visa}</strong>
            </h2>
          </div>

          <MDBCardBody style={{ background: "#F8BBD0" }}>
            <h4>
              <strong>Ultima Visa Reportada</strong>
              <hr />
            </h4>
            <h5>CC: {props.data.cc}</h5>
            <h5>Entrevista: {props.data.ent}</h5>
            <h5>Expedite: {props.data.exp}</h5>
            <h5>Mensual Reportadas: {props.data.count}</h5>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </div>
  );
};
