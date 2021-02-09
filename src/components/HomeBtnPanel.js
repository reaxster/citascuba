import React from "react";
import { MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="mb-5">
      <Link to="interviewsummary">
        <MDBBtn className="buttonHome">Resumen De Citas</MDBBtn>
      </Link>
      <Link to="table">
        <MDBBtn className="buttonHome">Todas las Citas</MDBBtn>
      </Link>
      <Link to="form">
        <MDBBtn className="buttonHome">Entrar Mi Cita</MDBBtn>
      </Link>
      <Link to="disclosure">
        <MDBBtn className="buttonHome">Condiciones de Uso</MDBBtn>
      </Link>
    </div>
  );
};
