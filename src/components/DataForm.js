import React, { useState, useRef, useEffect } from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import Note from "./Note";
import Test from "./Test";

export default (props) => {
  const [state, setState] = useState({
    name: "",
    dob: "",
    email: "",
    visa: "",
    cc: "",
    ent: "",
    exp: "",
  });

  const [canSubmit, setCanSubmit] = useState(false);

  /*const [captcha, setCaptcha] = useState({
    fistN
  })*/

  const formHandler = (event) => {
    setState({ [event.target.name]: event.target.value });
  };

  const hadnleName = (e) => {
    setState({ name: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
    console.log(state);
    //TODO: Complete the Chekking for all Fields and Submit
  };

  const notesData = {
    title: "Form Info",
    list: [
      "asdasdas",
      "sdasd",
      "Todos los Campos Deben de ser llenados apropiadamente.",
      "Despues de llenados, un administrador verificara su informacion y aceptara or denegara su peticion dependiendo si todos los datos entan correctamente",
      "IMPORTANTE: La fecha es introducida primero el MES, luego el DIA, y luego el año",
      "Si su visa es expedited, no olvide marcarlo en la ultima parte",
    ],
  };

  const [catcha, setCatcha] = useState({
    firstDigit: "",
    secondDigit: "",
    userDigit: "",
  });

  const firstNumber = useRef(Math.floor(Math.random() * 10 + 1));
  const secondNumber = useRef(Math.floor(Math.random() * 10 + 1));

  useEffect(() => {
    setCatcha({
      firstDigit: firstNumber.current,
      secondDigit: secondNumber.current,
    });
  }, []);

  return (
    <div
      style={{ padding: 50, border: "#C2185B 1px solid" }}
      className="shadow"
    >
      <h2 className="mb-5">Introdusca la Informacion de su Caso</h2>
      <div className="mb-5">
        <Note data={notesData} />
      </div>
      <form className="needs-validation" onSubmit={handleSubmit} noValidate>
        <MDBRow>
          <MDBCol lg="4" className="mb-4">
            <label htmlFor="form-name">Name and Last Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              id="form-name"
              placeholder="Tu Nombre"
              value={state.name}
              onChange={formHandler}
              required
            />
          </MDBCol>
          <MDBCol lg="4" className="mb-4">
            <label htmlFor="form-email">Correo Electronico</label>
            <input
              className="form-control"
              type="email"
              name="email"
              id="form-email"
              placeholder="correo@domain.com"
              value={state.email}
              onChange={formHandler}
              required
            />
          </MDBCol>
          <MDBCol lg="4" className="mb-4">
            <label htmlFor="form-dob">Fecha de Nacimiento</label>
            <input
              className="form-control"
              type="date"
              name="dob"
              id="form-dob"
              value={state.dob}
              onChange={formHandler}
              required
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4" className="mb-4">
            <label htmlFor="form-cc">Caso Cerrado</label>
            <input
              className="form-control"
              type="date"
              name="cc"
              id="form-cc"
              value={state.cc}
              onChange={formHandler}
              required
            />
          </MDBCol>
          <MDBCol lg="4" className="mb-4">
            <label htmlFor="form-ent">Fecha de Entrevista</label>
            <input
              className="form-control"
              type="date"
              name="ent"
              id="form-ent"
              value={state.ent}
              onChange={formHandler}
              required
            />
          </MDBCol>
          <MDBCol lg="4" className="mb-4">
            <label htmlFor="form-visa">Tipo de Visa</label>
            <select
              className="form-control"
              name="visa"
              id="form-visa"
              value={state.visa}
              onChange={formHandler}
              required
            >
              <option value=""></option>
              <option value="CR1/IR1">CR1/IR1</option>
              <option value="IR2">IR2</option>
              <option value="IR3">IR3</option>
              <option value="IR4">IR4</option>
              <option value="IR5">IR5</option>
              <option value="F1">F1</option>
              <option value="F2">F2</option>
              <option value="F3">F3</option>
              <option value="F4">F4</option>
            </select>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4 d-flex justify-content-center flex-column align-items-center">
          <label htmlFor="form-exp">Visa Expedite</label>
          <input
            style={{ width: "20px", height: "20px" }}
            className="form-control"
            type="checkbox"
            name="exp"
            id="form-exp"
            value={state.exp}
            onChange={formHandler}
          />
        </MDBRow>
        <MDBRow className="d-flex justify-content-center">
          <MDBBtn color="success" type="submit">
            Submit Form
          </MDBBtn>
        </MDBRow>
      </form>
      <div className="d-flex flex-column">
        <div className="d-flex flex-row justify-content-center test">
          <h2>{catcha.firstDigit}</h2>
          <h2>+</h2>
          <h2>{catcha.secondDigit}</h2>
          <h2>=</h2>
          <input
            type="text"
            className="mt-1"
            style={{ width: 50, height: 30, fontSize: 25 }}
          />
        </div>
      </div>
      <Test acceder={state.name} />
      <Test acceder={state.name} />
      <Test acceder={state.name} />
      <Test acceder={state.name} />
    </div>
  );
};
