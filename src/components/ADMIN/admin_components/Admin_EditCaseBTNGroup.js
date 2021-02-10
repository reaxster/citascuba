import React from "react";
import { MDBBtn, MDBIcon } from "mdbreact";

export default (props) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center align-items-md-stretch">
      <MDBBtn
        className="d-flex justify-content-center px-3 py-2"
        onClick={props.on_approve}
      >
        <MDBIcon className="fas fa-check " size="2x" />
      </MDBBtn>
      <MDBBtn
        className="d-flex justify-content-center px-3 py-2 warning-color"
        onClick={props.on_edit}
      >
        <MDBIcon className="fas fa-tools" size="2x" />
      </MDBBtn>
      <MDBBtn
        className=" d-flex justify-content-center px-3 py-2 danger-color"
        onClick={props.on_delete}
      >
        <MDBIcon className="far fa-trash-alt" size="2x" />
      </MDBBtn>
    </div>
  );
};
