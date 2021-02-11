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
      if (props.is_reload == true) window.location.reload(false);
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
        <MDBBtn color="pink darken-4" onClick={handleClose}>
          Close
        </MDBBtn>
      </MDBModalFooter>
    </MDBModal>

    /* <div className={showHideClassName}>
      <section className="modal-main">
        <div style={{ width: 200, height: 200, backgroundColor: "red" }}></div>
        {props.children}
        <button type="button" onClick={props.handleClose}>
          Close
        </button>
      </section>
    </div>*/
  );
};

export default Modal;
