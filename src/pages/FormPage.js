import React from "react";
import DataForm from "../components/DataForm";
import { MDBContainer } from "mdbreact";
import "../components/components.css";

export default () => {
  return (
    <MDBContainer className="centerXYColumn mt-5">
      <div className="m-5">
        <DataForm />
      </div>
    </MDBContainer>
  );
};
