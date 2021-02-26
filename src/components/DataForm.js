import React, { useState, useRef, useEffect } from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import axios from "axios";
import Note from "./Note";
import useFormHook from "../hooks/useFormHook";
import useToggle from "../hooks/useToggle";

//TODO: CAPTCHA VERIFICATION
import Captcha from "./Captcha";

export default (props) => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  console.log("--------------RENDERING DATA FORM PAGE--------------");
  const [name, updateName, resetName] = useFormHook("");
  const [email, updateEmail, resetEmail] = useFormHook("");
  const [visa, updateVisa, resetVisa] = useFormHook("Selecione su Visa");
  const [cc, updateCC, resetCC] = useFormHook("2021-01-01");
  const [ent, updateEnt, resetEnt] = useFormHook("2021-01-01");
  const [exp, updateExp, resetExp] = useFormHook("No");
  const [submitting, setSubmitting] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [captcha, setCaptcha] = useState("");

  const [canSubmit, setCanSubmit] = useState(false);

  //TODO: Complete the Chekking for all Fields and Submit

  const postData = async () => {
    try {
      const resp = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/cases",
        {
          name: name,
          email: email,
          visa: visa,
          cc: cc,
          ent: ent,
          exp: exp,
          captcha: captcha,
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

  function handleSubmit(e) {
    setSubmitting(true);
    e.preventDefault();
    postData();
    resetEmail();
    resetName();
    resetExp();
    setRerender(true);
    setCaptcha("");
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
            <label htmlFor="form-name">Nombre Y Apellidos</label>
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
            <label htmlFor="form-exp">Visa Expedite</label>{" "}
            <select
              className="form-control"
              name="exp"
              id="form-exp"
              value={exp}
              onChange={updateExp}
            >
              <option value="No">No</option>
              <option value="Si">Si</option>
            </select>
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
              <option value="">{visa}</option>
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

        <MDBRow className="d-flex flex-column align-items-center justify-content-center">
          <Captcha onChange={setCaptcha} />
          <MDBBtn
            className="buttonHome"
            onClick={handleSubmit}
            disabled={submitting}
          >
            Submit Form
          </MDBBtn>
        </MDBRow>
      </form>
    </div>
  );
};
