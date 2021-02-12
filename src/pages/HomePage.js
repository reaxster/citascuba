import React from "react";
import ReportedVisas from "../components/ReportedVisas";
import ReportedVisaFeed from "../Utils/ReportedVisaFeed";
import HomeText from "../components/HomeText";
import HomeBtnPanel from "../components/HomeBtnPanel";
import { MDBContainer, MDBBtn } from "mdbreact";
import "../components/components.css";

export default () => {
  console.log(
    "--------------V.3.0 HOME PAGE HAS BEEN RENDERED V.3.0--------------"
  );

  return (
    <div>
      <MDBContainer className="bringToFront mt-5">
        <h1>Bienvenidos a nuestra página web</h1>
        <h3>
          <strong>Creada por y para los cubanos</strong>
        </h3>
        <hr className="mb-5" />
        <div className="flag mt-5" />
        <div className="jumbotron">
          <HomeBtnPanel />
          <HomeText />
        </div>
      </MDBContainer>
    </div>
  );
};
