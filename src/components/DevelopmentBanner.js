import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";

function DevelopmentBanner() {
  return (
    <div
      className="my-5 py-5 d-flex flex-column flex-md-row"
      style={{ background: "#ff2440" }}
    >
      <MDBCol size="1" className="d-flex">
        <MDBIcon icon="cog" spin style={{ fontSize: 100, color: "white" }} />
        <MDBIcon icon="cog" spin style={{ fontSize: 100 }} />
      </MDBCol>
      <MDBCol size="10">
        <h1 style={{ color: "white" }}>
          <strong>
            This Site is in Development Mode and Does Not Work As Expected Yet.
          </strong>
        </h1>
        <h1 style={{ color: "white" }}>
          {" "}
          <strong>
            Please, do not delete any information or enter new one.
          </strong>
        </h1>
        <h1 style={{ color: "white" }}>
          {" "}
          <strong>
            We Will Remove This Message Once it is Fully Operational
          </strong>
        </h1>
      </MDBCol>
      <MDBCol size="1" className="d-flex">
        <MDBIcon icon="cog" spin style={{ fontSize: 100 }} />
        <MDBIcon icon="cog" spin style={{ fontSize: 100, color: "white" }} />
      </MDBCol>
    </div>
  );
}

export default DevelopmentBanner;
