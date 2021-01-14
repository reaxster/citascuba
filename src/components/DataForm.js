import React, { useState } from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

export default (props) => {
  const [state, setState] = useState({
    name: "Mark",
    dob: "",
    email: "",
    visa: "",
    cc: "",
    ent: "",
    exp: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  const changeHandler = (event) => {
    setState({ [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form className="needs-validation" onSubmit={submitHandler} noValidate>
        <MDBRow>
          <MDBCol md="4">
            <MDBInput
              value={state.name}
              name="name"
              onChange={changeHandler}
              type="text"
              label="Nombre Y Apellidos"
              required
            >
              <div className="valid-tooltip">Looks good!</div>
            </MDBInput>
          </MDBCol>
          <MDBCol md="4">
            <MDBInput
              value={state.dob}
              name="dob"
              onChange={changeHandler}
              type="date"
              id="materialFormRegisterEmailEx2"
              label="Fecha De Nacimiento"
              required
            >
              <div className="valid-tooltip">Looks good!</div>
            </MDBInput>
          </MDBCol>
          <MDBCol md="4">
            <MDBInput
              value={state.visa}
              name="visa"
              onChange={changeHandler}
              type="text"
              id="materialFormRegisterEmailEx2"
              label="Tipo de Visa"
              placeholder="17/17/2015"
              required
            >
              <div className="invalid-tooltip">
                Please provide a valid city.
              </div>
              <div className="valid-tooltip">Looks good!</div>
            </MDBInput>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="4">
            <MDBInput
              value={state.cc}
              name="cc"
              onChange={changeHandler}
              type="date"
              id="materialFormRegisterEmailEx2"
              label="Fecha De Caso Cerrado"
              placeholder="17/17/2015"
              required
            >
              <div className="invalid-tooltip">
                Please provide a valid state.
              </div>
              <div className="valid-tooltip">Looks good!</div>
            </MDBInput>
          </MDBCol>
          <MDBCol md="4">
            <MDBInput
              value={state.ent}
              onChange={changeHandler}
              type="text"
              id="materialFormRegisterPasswordEx4"
              name="ent"
              label="Fecha De Entrevista"
              required
            >
              <div className="invalid-tooltip">Please provide a valid zip.</div>
              <div className="valid-tooltip">Looks good!</div>
            </MDBInput>
          </MDBCol>
          <MDBCol md="4" className="test">
            <input type="checkbox" />
          </MDBCol>
        </MDBRow>
        <MDBBtn color="success" type="submit">
          Submit Form
        </MDBBtn>
      </form>
    </div>
  );
};
