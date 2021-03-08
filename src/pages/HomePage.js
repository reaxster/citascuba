import React from "react";
import ReportedVisas from "../components/interviewSumary/ReportedVisas";
import ReportedVisaFeed from "../Utils/ReportedVisaFeed";
import HomeText from "../components/home/HomeText";
import HomeBtnPanel from "../components/home/HomeBtnPanel";
import { MDBContainer, MDBBtn } from "mdbreact";
import "../components/components.css";

export default () => {
  console.log(
    "--------------V.3.0 HOME PAGE HAS BEEN RENDERED V.3.0--------------"
  );

  return (
    <div>
      <MDBContainer className="bringToFront mt-5">
        <h1>
          <strong>Bienvenidos a Nuestro Sitio Web</strong>
        </h1>
        <h5>
          <strong>Creado Por y Para los Cubanos</strong>
        </h5>
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
