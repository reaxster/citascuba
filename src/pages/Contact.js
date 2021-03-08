import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useFormHook from "../hooks/useFormHook";
import axios from "axios";
import Modal from "../components/ADMIN/admin_components/notification and modal/Modal";

import Captcha from "../components/Captcha";
import useToggle from "../hooks/useToggle";

import { Redirect } from "react-router-dom";

export default () => {
  const [name, updateName, resetName] = useFormHook("");
  const [email, updateEmail, resetEmail] = useFormHook("");
  const [category, updateCategory, resetCategory] = useFormHook(
    "Technical Issues"
  );
  const [message, updateMessage, resetMessage] = useFormHook("");
  const [validated, setValidated] = useState(false);
  const [captcha, setCaptcha] = useState(undefined);

  const [showModal, toggleShowModal] = useToggle(false);
  const [redirect, toggleRedirect] = useToggle(false);

  const postMessage = async () => {
    try {
      const res = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/contact",
        { name, email, category, message, captcha }
      );
      console.log(res.data);
    } catch (err) {
      alert(err);
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (captcha == undefined) {
      event.stopPropagation();
      alert("INVALID CAPTCHA");
      setValidated(true);
      return;
    }

    if (form.checkValidity() === false) {
      event.stopPropagation();
      alert("FORM INVaLID");
      setValidated(true);
      return;
    }

    postMessage();
    toggleShowModal();
    resetName();
    resetEmail();
    resetMessage();
    setCaptcha(undefined);
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Modal
        title="Confirmation"
        message="Su mensaje ha sido enviado"
        show={showModal}
        toggleRedirect={toggleRedirect}
        handleClose={toggleShowModal}
      />
      <h1>
        <strong>Contactenos</strong>
      </h1>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="jumbotron container"
      >
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Escriba su Nombre</Form.Label>
          <Form.Control
            required
            value={name}
            onChange={updateName}
            type="text"
            placeholder="Tu Nombre"
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Correo Electronico</Form.Label>
          <Form.Control
            required
            value={email}
            onChange={updateEmail}
            type="email"
            placeholder="correo@dominio.com"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Selecione Categoria</Form.Label>
          <Form.Control as="select" onChange={updateCategory} value={category}>
            <option value="Technical Issues">Problemas Tecnicos</option>
            <option value="Suggestions">Recomendaciones</option>
            <option value="Other">Otro</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            value={message}
            onChange={updateMessage}
            required
            placeholder="Escriba su mensaje aqui..."
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <div className="d-flex justify-content-center my-4">
          <Captcha onChange={setCaptcha} />
        </div>
        <Button variant="primary" type="submit">
          Enviar Mensaje
        </Button>
      </Form>
    </div>
  );
};
