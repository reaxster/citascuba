import React from "react";
import { MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="mb-5">
      <Link to="interviewsummary">
        <MDBBtn>Resumen De Citas</MDBBtn>
      </Link>
      <Link to="table">
        <MDBBtn>Todas las Citas</MDBBtn>
      </Link>
      <Link to="form">
        <MDBBtn>Entrar Mi Cita</MDBBtn>
      </Link>
      <Link to="disclosure">
        <MDBBtn>Condiciones de Uso</MDBBtn>
      </Link>
    </div>
  );
};
