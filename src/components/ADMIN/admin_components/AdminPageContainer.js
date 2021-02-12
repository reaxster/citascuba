import React from "react";
import { MDBCol } from "mdbreact";

import Admin_SideNav from "./Admin_SideNav";
import "../../components.css";
const AdminPageContainer = (props) => {
  return (
    <div className="d-flex flex-row justify-content-lg-center justify-content-around just WH">
      <MDBCol size="1 d-flex  justify-content-end  justify-content-md-center">
        <Admin_SideNav />
      </MDBCol>
      <MDBCol
        size="11"
        className="d-flex justify-content-md-center justify-content-sm-around justify-content-end mt-1"
      >
        {props.children}
      </MDBCol>
    </div>
  );
};

export default AdminPageContainer;
