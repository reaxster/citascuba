import React from "react";
import ReportedVisas from "../components/ReportedVisas";
import ReportedVisaFeed from "../Utils/ReportedVisaFeed";
import HomeText from "../components/HomeText";
import HomeBtnPanel from "../components/HomeBtnPanel";
import { MDBContainer, MDBBtn } from "mdbreact";
import "../components/components.css";

export default () => {
  console.log("--------------HOME PAGE HAS BEEN RENDERED --------------");

  return (
    <div>
      <MDBContainer className="bringToFront">
        <h1>Bienvenido a nuestra pagina web. </h1>
        <h2>
          <strong>Creada por y para los cubanos</strong>
        </h2>
        <div className="flag" />
        <div className="jumbotron">
          <HomeBtnPanel />
          <HomeText />
        </div>
      </MDBContainer>
    </div>
  );
};
