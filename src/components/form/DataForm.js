import React, { useState, useRef, useEffect } from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon, MDBLink } from "mdbreact";
import axios from "axios";
import Note from "../Note";
import useFormHook from "../../hooks/useFormHook";
import useToggle from "../../hooks/useToggle";
import DataFormInterview from "./DataFormInterview";
import CreateRecord from "../../Utils/Components Utils/DataForm/CreateRecord";

//TODO: CAPTCHA VERIFICATION
import Captcha from "../Captcha";
import Modal from "../ADMIN/admin_components/notification and modal/Modal";
import { Redirect } from "react-router-dom";
import DataFormInput from "./DataFormInput";

export default (props) => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  console.log("--------------RENDERING DATA FORM PAGE--------------");
  const [name, updateName, resetName] = useFormHook("");
  const [email, updateEmail, resetEmail] = useFormHook("");
  const [visa, updateVisa, resetVisa] = useFormHook("CR1/IR1");
  const [cc, updateCC, resetCC] = useFormHook("2021-01-01");
  const [ent, updateEnt, resetEnt] = useFormHook("2021-01-01");
  const [exp, updateExp, resetExp] = useFormHook("No");
  const [submitting, setSubmitting] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [hasInterview, updateHasInterview] = useToggle(false);

  const [showModal, toggleShowModal] = useToggle(false);
  const [redirect, toggleRedirect] = useToggle(false);

  const [canSubmit, setCanSubmit] = useState(false);

  const [showUpdateInterview, toggleShowUpdateInterview] = useToggle(false);

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
          ent: hasInterview ? ent : "N/A",
          exp: exp,
          hasInterview: hasInterview,
          captcha: captcha,
        }
      );
      toggleShowModal();
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
  }

  function handleModalClose() {
    resetEmail();
    resetName();
    setRerender(true);
    setCaptcha("");
    toggleShowModal();
  }

  const notesData = {
    title: "Acerca del del Formulario",
    list: [
      "SOLO ENTRE SUS DATOS SI YA TIENE FECHA DE ENTREVISTA O CASO CERRADO",
      "Todos los campos deben ser correctamente llenados.",
      "Los datos serán verificados por un administrador y el record se permitirá o denegará dependiendo de la veracidad de la información.",
      "Debe prestar singular atención al formato de la fecha (M/D/A) a la hora de ingresar la información.",
      "Si su visa es de carácter expedito, no olvide marcarlo en la última casilla.",
    ],
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  const expOptions = ["No", "Si"];
  const visaOptions = [
    "Seleccione una Visa",
    "CR1/IR1",
    "CR2/IR2",
    "IR3",
    "IR4",
    "IR5",
    "F1",
    "F2A",
    "F2B",
    "F3",
    "F4",
    "K1",
    "K2",
    "K3",
    "K4",
  ];

  return (
    <div
      style={{ padding: 50, border: "#C2185B 1px solid" }}
      className="shadow"
    >
      <Modal
        title="Confirmation"
        message={
          "Su solicitud ah sido enviada. Le hemos enviado un email confirmando que hemos recibido su solicitud.\n Su numero de record es: " +
          CreateRecord(name, visa, cc)
        }
        show={showModal}
        toggleRedirect={toggleRedirect}
        handleClose={handleModalClose}
      />

      <DataFormInterview
        title="Actualizar Fecha de Entrevista"
        show={showUpdateInterview}
        toggleRedirect={toggleRedirect}
        handleClose={toggleShowUpdateInterview}
      />

      <h2>Introduzca la Información de su Caso</h2>
      <hr className="mb-5" />
      <div className="mb-5">
        <Note data={notesData} />
      </div>
      <form className="needs-validation" noValidate action="#">
        <div className="d-flex justify-content-center align-items-center">
          <MDBIcon icon="info-circle" size="2x" style={{ color: "#FF6F00" }} />
          <h5 className="red-text mx-2">
            <strong>
              SOLO ENTRE SUS DATOS SI TIENE UN CASO CERRADO O ENTREVISTA
            </strong>
          </h5>
        </div>
        <hr />
        <div>
          <h6 className="d-flex flex-column justify-content-center">
            Si ya entro su caso cerrado y desea entrar ahora una fecha de
            entrevista puede hacerlo{" "}
            <MDBLink
              onClick={toggleShowUpdateInterview}
              className="p-0 m-0 ml-1"
            >
              <strong>Presinando Aqui!</strong>
            </MDBLink>
          </h6>
          <h6>
            {" "}
            Si tiene un caso cerrado o un caso cerrado con entrevista entonces
            complete el formulario que esta debajo
          </h6>
        </div>
        <hr />
        <MDBRow>
          <DataFormInput
            value={name}
            onChange={updateName}
            id="form-name"
            label="Nombre Y Apellidos"
            placeholder="Tu Nombre"
            required={true}
          />
          <DataFormInput
            value={email}
            onChange={updateEmail}
            id="form-email"
            label="Correo Electronico"
            placeholder="correo@domain.com"
            type="email"
            required={true}
          />

          <DataFormInput
            value={exp}
            onChange={updateExp}
            id="form-exp"
            label="Visa Expedite"
            type="select"
            options={expOptions}
          />
        </MDBRow>
        <MDBRow>
          <DataFormInput
            value={cc}
            onChange={updateCC}
            id="form-cc"
            label="Caso Cerrado"
            placeholder={cc}
            type="date"
          />

          {!hasInterview && (
            <DataFormInput
              value={hasInterview}
              onChange={updateHasInterview}
              id="form-exp"
              label="Tienes Entrevista?"
              type="select"
              options={expOptions}
            />
          )}

          {hasInterview && (
            <DataFormInput
              value={ent}
              onChange={updateEnt}
              id="form-ent"
              label="Fecha de Entrevista"
              placeholder={ent}
              type="date"
            />
          )}

          <DataFormInput
            value={visa}
            onChange={updateVisa}
            id="form-visa"
            label="Tipo de Visa"
            type="select"
            options={visaOptions}
          />
        </MDBRow>

        <MDBRow className="d-flex flex-column align-items-center justify-content-center">
          {/* <Captcha onChange={setCaptcha} />*/}

          <MDBBtn
            className="buttonHome mt-4"
            onClick={handleSubmit}
            disabled={submitting}
          >
            Enviar Formulario
          </MDBBtn>
          <h6 className="my-3">
            Al someter este forlulario, usted acepta nuestras{" "}
            <a href="/disclosure" target="_blank">
              politicas de uso y privacidad
            </a>{" "}
            y acepta recebir notificaciones concernientes a nuestros servicios.
          </h6>
        </MDBRow>
      </form>
    </div>
  );
};
