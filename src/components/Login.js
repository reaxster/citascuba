import React, { useContext } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBLink,
} from "mdbreact";

import { AuthContext } from "../contexs/useAuthContext";

const Login = () => {
  const auth = useContext(AuthContext);

  return (
    <MDBContainer>
      <MDBRow className="d-flex justify-content-center my-5">
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="pink-text mb-5">
                  <strong>Login</strong>
                </h3>
              </div>
              <MDBInput label="Your email" group type="text" validate />
              <MDBInput label="Your password" group type="password" validate />

              <MDBRow className="d-flex flex-column justify-content-center align-items-center  mb-4">
                <MDBCol md="6" className=" mb-2 ">
                  <MDBBtn className="z-depth-1" color="pink" rounded block>
                    Login
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="6" className=" d-flex justify-content-column">
                  <p className="font-small grey-text w-100">
                    No tienes cuenta?
                    <MDBLink to="signup">Registrate</MDBLink>
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
            <div className="footer pt-3 mdb-color lighten-3">
              <MDBRow className="d-flex justify-content-center">
                <p className="font-small white-text mb-2 pt-3">
                  Gracias por usar nuestro sitio
                </p>
              </MDBRow>
              <MDBRow className="mt-2 mb-3 d-flex justify-content-center"></MDBRow>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
