import React from "react";
import DataForm from "../components/form/DataForm";
import { MDBContainer } from "mdbreact";
import "../components/components.css";

export default () => {
  return (
    <MDBContainer>
      <div className="my-5">
        <DataForm />
      </div>
    </MDBContainer>
  );
};
