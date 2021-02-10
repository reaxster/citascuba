import React from "react";
import { MDBRow, MDBCol } from "mdbreact";
import Admin_SideNav from "./Admin_SideNav";
import "../../components.css";
export default (props) => {
  return (
    <div className="d-flex flex-row justify-content-lg-center justify-content-around just WH mt-1">
      <div>
        <Admin_SideNav />
      </div>

      {props.children}
    </div>
  );
};
