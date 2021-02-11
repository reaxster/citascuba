import React, { useState } from "react";
import { MDBBtn } from "mdbreact";

export default (props) => {
  const handleSaveChanges = () => {
    props.modalHandler();
  };

  return (
    <div className={"d-flex justify-content-center " + props.className}>
      <MDBBtn
        style={{
          textAlign: "center",
          width: "80%",
          margin: 0,
          ...props.btnStyle,
        }}
        color={props.color}
        onClick={handleSaveChanges}
        className={"d-flex justify-content-center m-1"}
      >
        {props.children}
      </MDBBtn>
    </div>
  );
};
