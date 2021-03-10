import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBModalHeader,
} from "mdbreact";
import React from "react";
import DataFormInput from "./DataFormInput";
import useFormHook from "../../hooks/useFormHook";
import axios from "axios";
import { Link } from "react-router-dom";
import useToggle from "../../hooks/useToggle";
import GetRecord from "./GetRecord";

const DataFormInterview = (props) => {
  //Handle Close and Reload Page Consitionally
  const [ent, updateEnt, resetEnt] = useFormHook("");
  const [record, updateRecord, resetRecord] = useFormHook("");
  const [showRecordTool, updateShowRecordTool] = useToggle(false);

  const patchData = async () => {
    try {
      const res = await axios.patch(
        process.env.REACT_APP_BACKEND_URL +
          "/cases/updateinterviewdate/" +
          record,
        { record, ent }
      );
      alert(
        "FELICIDADES!!! Hemos podido actualizar su fecha de entrevista en nuestro sistema"
      );
    } catch (err) {
      alert(
        "UN ERROR HA OCCURRIDO CUANDO INTENTABAMOS ACTUALIZAR SU INFORMACION. TAL VEZ SU INFORMACION YA EXISTE. SI EL ERROR PERESISTE PORFAVOR CONTACTE AL ADMINSITRADOR DE LA PAGINA"
      );
    }
  };

  const handleClose = () => {
    props.handleClose();

    resetEnt("");
    resetRecord("");

    setTimeout(() => {
      if (props.is_reload === true || props.onCancelReload === true)
        window.location.reload(false);
    }, 200);
  };

  const handleConfirm = () => {
    patchData();
    handleClose();
    setTimeout(() => {
      if (props.is_reload === true || props.onConfirmReload === true)
        window.location.reload(false);
    }, 200);
  };

  return (
    <MDBModal isOpen={props.show} centered>
      <GetRecord show={showRecordTool} handleClose={updateShowRecordTool} />
      <MDBModalHeader toggle={handleClose}>
        {props.icon == !undefined ? (
          <i className={"mr-2 text-warning mr-2 " + props.icon} />
        ) : (
          <i className="fas fa-exclamation-circle mr-2 text-warning" />
        )}
        {props.title == undefined ? "Notification" : props.title}
      </MDBModalHeader>
      <MDBModalBody>
        <div>
          Si previamente ha creado un record con nosotros entonces llene el
          formulario de abajo. De lo contrario, haga click en cancelar y llene
          el formulario anterior completo. Si no recuerda su record haga click
          en
          <Link onClick={updateShowRecordTool} className="mx-2">
            <strong>Obtener Numero de Record</strong>
          </Link>
        </div>
        <hr />

        <DataFormInput
          size="12"
          md="12"
          value={record}
          onChange={updateRecord}
          id="form-record"
          label="Numero de Record"
          type="input"
          placeholder="Numero De Record"
        />
        <DataFormInput
          size="12"
          md="12"
          value={ent}
          onChange={updateEnt}
          id="form-ent"
          label="Fecha de Entrevista"
          type="date"
        />
      </MDBModalBody>

      <MDBModalFooter className="d-flex justify-content-center">
        <MDBBtn
          color="pink darken-4"
          onClick={handleConfirm}
          disabled={props.submit}
        >
          Actualizar
        </MDBBtn>

        <MDBBtn
          color="pink darken-4"
          onClick={handleClose}
          disabled={props.submit}
        >
          Volver
        </MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  );
};

export default DataFormInterview;
