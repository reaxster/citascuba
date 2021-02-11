import React, { useState } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

export default (props) => {
  const [modal, setModal] = useState(false);

  const toggle = (e) => () => {
    setModal(!modal);
  };

  const handleSaveChanges = () => {
    props.modalHandler();
    setModal(false);

    if (props.is_reload == true) window.location.reload(false);
  };

  return (
    <div className={"d-flex justify-content-center" + props.className}>
      <MDBBtn
        style={{
          textAlign: "center",
          width: "80%",
          margin: 0,
          ...props.btnStyle,
        }}
        color={props.color}
        onClick={toggle(14)}
        className={"d-flex justify-content-center m-1"}
        disabled={props.disableOnSubmit}
      >
        {props.children}
        {/*{props.isIcon ? props.children : props.btnTitle}*/}
      </MDBBtn>
      <MDBModal isOpen={modal} toggle={toggle(14)} centered>
        <MDBModalHeader toggle={toggle(14)}>
          {props.title == !undefined ? props.title : "Alert"}
        </MDBModalHeader>
        <MDBModalBody>{props.modalMessage}</MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="success" onClick={handleSaveChanges}>
            Confirm
          </MDBBtn>
          <MDBBtn color="danger" onClick={toggle(14)}>
            Cancel
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </div>
  );
};
