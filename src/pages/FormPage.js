import React from "react";
import DataForm from "../components/DataForm";
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
