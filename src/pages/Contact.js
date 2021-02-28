import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useFormHook from "../hooks/useFormHook";
import axios from "axios";

import Captcha from "../components/Captcha";

export default () => {
  const [name, updateName, resetName] = useFormHook("");
  const [email, updateEmail, resetEmail] = useFormHook("");
  const [category, updateCategory, resetCategory] = useFormHook("");
  const [message, updateMessage, resetMessage] = useFormHook("");
  const [validated, setValidated] = useState(false);

  const postMessage = async () => {
    try {
      const res = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/contact",
        { name, email, category, message }
      );
      console.log(res.data);
    } catch (err) {
      alert(err);
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
      alert("FORM INVaLID");
      setValidated(true);
      return;
    }

    postMessage();
    alert(name + " " + email + " " + category + " " + message);

    resetName();
    resetEmail();
    resetMessage();
  };

  return (
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
          <option value="technical">Problemas Tecnicos</option>
          <option value="suggestions">Recomendaciones</option>
          <option value="other">Otro</option>
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
      <Button variant="primary" type="submit">
        Enviar Mensaje
      </Button>
    </Form>
  );
};
