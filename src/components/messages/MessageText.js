import React from "react";
import { MDBCol, MDBBtn } from "mdbreact";
import useFormHook from "../../hooks/useFormHook";
import useToggle from "../../hooks/useToggle";

function MessageText(props) {
  // const { timestamp, read, message, sender } = props.data;
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  const TEXT_LIMIT = 500;

  today = mm + "/" + dd + "/" + yyyy;

  const [text, updateText, resetText] = useFormHook("");
  const [textOverflow, toggleTextoverflow] = useToggle(false);

  if (text.length <= TEXT_LIMIT && textOverflow) toggleTextoverflow();
  else if (text.length > TEXT_LIMIT && !textOverflow) toggleTextoverflow();

  return (
    <MDBCol
      size={12}
      className=" shadow jumbotron m-0 p-0 my-2"
      style={{ border: "3px solid #26A69A", borderRadius: "1px" }}
    >
      <div className="d-flex justify-content-between align-items-center mt-3 px-5">
        <h6 className="">
          <strong>RICHAR MARSHALL</strong>
        </h6>
        <h6 className="">
          <strong>UNREAD</strong>
        </h6>
        <h6 className="">
          <strong>{today}</strong>
        </h6>
      </div>
      <hr />
      <textarea
        className="form-control rounded-0 w-100 px-5 text-justify"
        name=""
        id=""
        cols="30"
        rows="5"
        value={text}
        onChange={updateText}
        placeholder="Escriba Su mensaje aqui"
      />
      <div
        className={
          textOverflow
            ? "font-weight-bolder"
            : "font-weight-normal" + " d-flex justify-content-start px-5"
        }
      >
        <p>
          Letras Restantes:{" "}
          <span className={textOverflow ? "red-text" : "green-text"}>
            {text.length}
          </span>
          /{TEXT_LIMIT}
        </p>
      </div>
      <div>
        <MDBBtn>ENVIAR MENSAJE</MDBBtn>
        <MDBBtn>VOLVER AL INICIO</MDBBtn>
      </div>
    </MDBCol>
  );
}

export default MessageText;
