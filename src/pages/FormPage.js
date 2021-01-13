import React from "react";
import DataForm from "../components/DataForm";
import { MDBContainer } from "mdbreact";

export default () => {
  return (
    <MDBContainer className="shadow">
      <h1>Form Page Comes Here</h1>
      <div className="m-5">
        <DataForm />
      </div>
    </MDBContainer>
  );
};
