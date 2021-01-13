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
          <MDBCol md="3">
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
          <MDBCol md="3">
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
          <MDBCol md="3">
            <MDBInput
              value={state.email}
              onChange={changeHandler}
              type="email"
              id="materialFormRegisterConfirmEx3"
              name="email"
              label="Your Email address"
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="3">
            <select className="browser-default custom-select" required>
              <option value="0">Seleccione Su Tipo De Visa</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            <div className="invalid-tooltip">Please provide a valid city.</div>
            <div className="valid-tooltip">Looks good!</div>
          </MDBCol>
          <MDBCol md="3">
            <MDBInput
              value={state.cc}
              name="dob"
              onChange={changeHandler}
              type="date"
              id="materialFormRegisterEmailEx2"
              label="Fecha De Caso Cerrado"
              required
            >
              <div className="invalid-tooltip">
                Please provide a valid state.
              </div>
              <div className="valid-tooltip">Looks good!</div>
            </MDBInput>
          </MDBCol>
          <MDBCol md="3">
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
          <MDBCol md="3">
            <MDBInput
              value={state.exp}
              onChange={changeHandler}
              type="text"
              id="materialFormRegisterPasswordEx4"
              name="ent"
              label="Expedited"
              required
            >
              <div className="invalid-tooltip">Please provide a valid zip.</div>
              <div className="valid-tooltip">Looks good!</div>
            </MDBInput>
          </MDBCol>
        </MDBRow>
        <MDBBtn color="success" type="submit">
          Submit Form
        </MDBBtn>
      </form>
    </div>
  );
};
