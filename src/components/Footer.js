import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-4" style={{ background: "#880E4F" }}>
      <div className="text-center pb-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="#"> Reaxster WebDev.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
