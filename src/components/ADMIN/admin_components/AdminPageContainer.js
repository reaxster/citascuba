import React from "react";
import { MDBCol } from "mdbreact";

import Admin_SideNav from "./Admin_SideNav";
import "../../components.css";
const AdminPageContainer = (props) => {
  return (
    <div className="d-flex flex-row justify-content-center justify-content-around WH">
      <div style={{ width: "5%" }}>
        <Admin_SideNav />
      </div>
      <div className="d-flex justify-content-center mt-1 w-100">
        {props.children}
      </div>
    </div>
  );
};

export default AdminPageContainer;
