import React, { useState, useRef, useEffect } from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import axios from "axios";
import Note from "./Note";
import useFormHook from "../hooks/useFormHook";
import useToggle from "../hooks/useToggle";

export default (props) => {
  console.log("--------------RENDERING DATA FORM PAGE--------------");
  const [name, updateName, resetName] = useFormHook("");
  const [dob, updateDOB, resetDOB] = useFormHook("2021-01-01");
  const [email, updateEmail, resetEmail] = useFormHook("");
  const [visa, updateVisa, resetVisa] = useFormHook("");
  const [cc, updateCC, resetCC] = useFormHook("2021-01-01");
  const [ent, updateEnt, resetEnt] = useFormHook("2021-01-01");
  const [exp, updateExp] = useToggle(false);
  const [submitting, setSubmitting] = useState(false);
  const [rerender, setRerender] = useState(false);

  const [canSubmit, setCanSubmit] = useState(false);

  //TODO: Complete the Chekking for all Fields and Submit

  const postData = async () => {
    try {
      const resp = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/cases",
        {
          name: name,
          dob: dob,
          email: email,
          visa: visa,
          cc: cc,
          ent: ent,
          exp: exp,
        }
      );
      alert(resp.data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    setSubmitting(false);
    setRerender(false);
  }, [rerender]);

  function handleClick(e) {
    setSubmitting(true);
    e.preventDefault();
    postData();
    resetEmail();
    resetName();
    setRerender(true);
  }

  const notesData = {
    title: "Acerca del del Formulario",
    list: [
      "Todos los campos deben ser correctamente llenados.",
      "Los datos serán verificados por un administrador y el record se permitirá o denegará dependiendo de la veracidad de la información.",
      "Debe prestar singular atención al formato de la fecha (M/D/A) a la hora de ingresar la información.",
      "Si su visa es de carácter expedito, no olvide marcarlo en la última casilla.",
    ],
  };

  return (
    <div
      style={{ padding: 50, border: "#C2185B 1px solid" }}
      className="shadow"
    >
      <h2>Introduzca la Información de su Caso</h2>
      <hr className="mb-5" />
      <div className="mb-5">
        <Note data={notesData} />
      </div>
      <form className="needs-validation" noValidate>
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
        <MDBRow className="m-4 d-flex justify-content-center flex-column align-items-center">
          <label htmlFor="form-exp">Visa Expedite</label>
          <MDBInput
            className="form-control"
            size="lg"
            type="checkbox"
            name="exp"
            id="form-exp"
            value={exp}
            onChange={updateExp}
          />
        </MDBRow>
        <MDBRow className="d-flex justify-content-center">
          <MDBBtn
            className="buttonHome"
            onClick={handleClick}
            disabled={submitting}
          >
            Submit Form
          </MDBBtn>
        </MDBRow>
      </form>
    </div>
  );
};
