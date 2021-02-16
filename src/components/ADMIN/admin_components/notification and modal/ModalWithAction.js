import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBModalHeader,
} from "mdbreact";
import React from "react";

const Modal = (props) => {
  //Handle Close and Reload Page Consitionally
  const handleClose = () => {
    props.handleClose();

    setTimeout(() => {
      if (props.is_reload === true || props.onCancelReload === true)
        window.location.reload(false);
    }, 200);
  };

  const handleConfirm = () => {
    props.handleConfirm();
    props.handleClose();
    setTimeout(() => {
      if (props.is_reload === true || props.onConfirmReload === true)
        window.location.reload(false);
    }, 200);
  };

  return (
    <MDBModal isOpen={props.show} centered>
      <MDBModalHeader toggle={handleClose}>
        {props.icon == !undefined ? (
          <i className={"mr-2 text-warning mr-2 " + props.icon} />
        ) : (
          <i className="fas fa-exclamation-circle mr-2 text-warning" />
        )}
        {props.title == !undefined ? props.title : " Notification"}
      </MDBModalHeader>
      <MDBModalBody>{props.message}</MDBModalBody>
      <MDBModalFooter className="d-flex justify-content-center">
        <MDBBtn
          color="pink darken-4"
          onClick={handleConfirm}
          disabled={props.submit}
        >
          Confirm
        </MDBBtn>
        <MDBBtn
          color="pink darken-4"
          onClick={handleClose}
          disabled={props.submit}
        >
          Close
        </MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  );
};

export default Modal;
