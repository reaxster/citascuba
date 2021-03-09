import React, { useContext, useState } from "react";
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
import axios from "axios";
import useFormHook from "../../hooks/useFormHook";

import { AuthContext } from "../../contexs/useAuthContext";

const Login = () => {
  const auth = useContext(AuthContext);

  const [email, setEmail, resetEmail] = useFormHook("");
  const [password, setPassword, resetPassword] = useFormHook("");
  const [isSubmit, setIsSubmit] = useState(false);

  const login = async () => {
    try {
      const res = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/users/login",
        {
          email: email,
          password: password,
        }
      );

      if (res.status === 200) {
        console.log(res.data);
        auth.login(res.data.userId, res.data.token);
        console.log(res.data);
        console.log("YOU ARE LOGGED IN");
      }
    } catch (err) {
      console.log("ERROR ON LOGIN");
      console.log(err);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    login();
    setIsSubmit(false);
    /*   resetEmail();
    resetPassword();*/
  };

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
              <MDBInput
                label="Your email"
                group
                type="text"
                value={email}
                onChange={setEmail}
                validate
              />
              <MDBInput
                label="Your password"
                group
                type="password"
                value={password}
                onChange={setPassword}
                validate
              />

              <MDBRow className="d-flex flex-column justify-content-center align-items-center  mb-4">
                <MDBCol md="6" className=" mb-2 ">
                  <MDBBtn
                    className="z-depth-1"
                    color="pink"
                    rounded
                    block
                    disabled={isSubmit}
                    onClick={handleLogin}
                  >
                    Login
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="6" className=" d-flex justify-content-column">
                  <p className="font-small grey-text w-100">
                    No tienes cuenta?
                    <MDBLink to="/signup">Registrate</MDBLink>
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
