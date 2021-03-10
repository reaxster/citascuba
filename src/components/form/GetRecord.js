import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBModalHeader,
  MDBRow,
} from "mdbreact";
import React from "react";
import DataFormInput from "./DataFormInput";
import useFormHook from "../../hooks/useFormHook";
import useToggle from "../../hooks/useToggle";
import CreateRecord from "../../Utils/Components Utils/DataForm/CreateRecord";

const GetRecord = (props) => {
  //Handle Close and Reload Page Consitionally
  const [cc, updateCC, resetCC] = useFormHook();
  const [name, updateName, resetName] = useFormHook("");
  const [visa, updateVisa, resetVisa] = useFormHook("Seleccione una Visa");
  const [generated, toggleGenerated] = useToggle(false);

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

  const handleClose = () => {
    props.handleClose();
    resetName();
    resetCC();
    toggleGenerated();
  };

  const handleConfirm = () => {
    toggleGenerated();
  };

  return (
    <MDBModal isOpen={props.show} centered>
      <MDBModalHeader toggle={handleClose}>
        {props.icon == !undefined ? (
          <i className={"mr-2 text-warning mr-2 " + props.icon} />
        ) : (
          <i className="fas fa-exclamation-circle mr-2 text-warning" />
        )}
        {props.title == undefined ? "Obtener Numero de Record" : props.title}
      </MDBModalHeader>
      {generated && (
        <div>
          <div className="d-flex  flex-column align-items-center">
            <p className="text-center">
              El numero de record que aparece debajo es basado en la informacion
              que usted no ah provisto. Si la informacion es incorrecta o
              imcompleta el numero de record tambiens era incorrecto.
            </p>
          </div>
          <hr />

          <div className="d-flex  flex-column align-items-center">
            <h4>Su record es:</h4>
            <h5>
              <strong>{CreateRecord(name, visa, cc)}</strong>
            </h5>
          </div>
        </div>
      )}
      {!generated && (
        <MDBModalBody>
          <div>
            <p>
              Llene el siguiente formulario para obtener su numero de record
            </p>
          </div>
          <hr />
          <DataFormInput
            size="12"
            md="12"
            value={name}
            onChange={updateName}
            id="form-name"
            label="Nombre Y Apellidos"
            placeholder="Tu Nombre"
            required={true}
          />

          <DataFormInput
            size="12"
            md="12"
            value={cc}
            onChange={updateCC}
            id="form-ent"
            label="Fecha de Caso Cerrado"
            type="date"
          />

          <DataFormInput
            size="12"
            md="12"
            value={visa}
            onChange={updateVisa}
            id="form-visa"
            label="Tipo de Visa"
            type="select"
            options={visaOptions}
          />
        </MDBModalBody>
      )}

      <MDBModalFooter>
        <div className="d-flex w-100 justify-content-center">
          {!generated && (
            <MDBBtn
              className="w-100"
              color="pink darken-4"
              onClick={handleConfirm}
              disabled={props.submit}
            >
              Obtener Record
            </MDBBtn>
          )}

          <MDBBtn
            className="w-100"
            color="pink darken-4"
            onClick={handleClose}
            disabled={props.submit}
          >
            Volver
          </MDBBtn>
        </div>
      </MDBModalFooter>
    </MDBModal>
  );
};

export default GetRecord;
