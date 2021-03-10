import React from "react";
import AdminPageContainer from "../admin_components/AdminPageContainer";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdbreact";

export default () => {
  return (
    <AdminPageContainer>
      <div className="jumbotron test w-100">
        <h2>THIS IS THE ADMIN DARSHBOARD</h2>
        <Link to="/managecases">
          <MDBBtn>MANAGE CASES</MDBBtn>
        </Link>
      </div>
    </AdminPageContainer>
  );
};
