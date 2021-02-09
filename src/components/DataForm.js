import React, { useState, useRef, useEffect } from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import axios from "axios";
import Note from "./Note";
import useFormHook from "../hooks/useFormHook";
import useToggle from "../hooks/useToggle";
import { getDateForInput, convertToMMDDYYY } from "../Utils/Date/DateUtil";
import CreateRecord from "../Utils/Components Utils/DataForm/CreateRecord";
import CreateTimestamp from "../Utils/Components Utils/DataForm/CreateTimestamp";

export default (props) => {
  const [name, updateName, resetName] = useFormHook("");
  const [dob, updateDOB, resetDOB] = useFormHook(getDateForInput());
  const [email, updateEmail, resetEmail] = useFormHook("");
  const [visa, updateVisa, resetVisa] = useFormHook("");
  const [cc, updateCC, resetCC] = useFormHook(getDateForInput());
  const [ent, updateEnt, resetEnt] = useFormHook(getDateForInput());
  const [exp, updateExp] = useToggle(false);

  const [canSubmit, setCanSubmit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
    const dataToSubmit = {
      name: name,
      dob: convertToMMDDYYY(dob),
      email: email,
      visa: visa,
      cc: convertToMMDDYYY(cc),
      ent: convertToMMDDYYY(ent),
      exp: exp ? "YES" : "NO",
      record: CreateRecord(name, dob, ent),
      timestamp: CreateTimestamp(ent),
    };

    console.log(dataToSubmit);

    //TODO: Complete the Chekking for all Fields and Submit

    const postData = async () => {
      try {
        const resp = await axios.post(
<<<<<<< HEAD
          "http://127.0.0.1:5000/api/cases",
=======
          process.env.REACT_APP_BACKEND_URL,
>>>>>>> ab2973cba0963869e5e3c58f06799db348cccf81
          dataToSubmit
        );
        alert(resp.data);
      } catch (err) {
        alert(err);
      }
    };

    postData();
  };

  const notesData = {
    title: "Form Info",
    list: [
      "Todos los Campos Deben de ser llenados apropiadamente.",
      "Despues de llenados, un administrador verificara su informacion y aceptara or denegara su peticion dependiendo si todos los datos entan correctamente",
      "IMPORTANTE: La fecha es introducida primero el MES, luego el DIA, y luego el año",
      "Si su visa es expedited, no olvide marcarlo en la ultima parte",
    ],
  };

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
              value={name}
              onChange={updateName}
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
              value={email}
              onChange={updateEmail}
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
              value={dob}
              onChange={updateDOB}
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
              value={cc}
              onChange={updateCC}
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
              value={ent}
              onChange={updateEnt}
              required
            />
          </MDBCol>
          <MDBCol lg="4" className="mb-4">
            <label htmlFor="form-visa">Tipo de Visa</label>
            <select
              className="form-control"
              name="visa"
              id="form-visa"
              value={visa}
              onChange={updateVisa}
              required
            >
              <option value=""></option>
              <option value="CR1/IR1">CR1/IR1</option>
              <option value="CR2/IR2">CR2/IR2</option>
              <option value="IR3">IR3</option>
              <option value="IR4">IR4</option>
              <option value="IR5">IR5</option>
              <option value="F1">F1</option>
              <option value="F2A">F2A</option>
              <option value="F2B">F2B</option>
              <option value="F3">F3</option>
              <option value="F4">F4</option>
              <option value="K1">K1</option>
              <option value="K2">K2</option>
              <option value="K3">K3</option>
              <option value="K4">K4</option>
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
            value={exp}
            onChange={updateExp}
          />
        </MDBRow>
        <MDBRow className="d-flex justify-content-center">
          <MDBBtn color="success" type="submit">
            Submit Form
          </MDBBtn>
        </MDBRow>
      </form>
    </div>
  );
};
