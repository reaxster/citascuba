import React, { useContext, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBBtn,
  MDBLink,
} from "mdbreact";

import { AuthContext } from "../../contexs/useAuthContext";
import useFormHook from "../../hooks/useFormHook";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const auth = useContext(AuthContext);

  const [name, updateName, resetName] = useFormHook("");
  const [lastName, updateLastName, resetLastName] = useFormHook("");
  const [email, updateEmail, resetEmail] = useFormHook("");
  const [password, updatePassword, resetPassword] = useFormHook("");
  const [country, updateContry, resetCountry] = useFormHook("");
  const [phone, updatePhone, resetPhone] = useFormHook("");
  const [isSubmit, setIsSubmit] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const res = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/users/signup",
        {
          email: email,
          password: password,
          name,
          lastName,
          country,
          phone,
        }
      );

      /* return <Redirect to="/" />;*/
    } catch (err) {
      console.log(err);
      alert(err);
    }
  }

  if (!auth.isLoggedIn)
    return (
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center my-5">
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody className="mx-4">
                <div className="text-center">
                  <h3 className="pink-text mb-5">
                    <strong>Registrate</strong>
                  </h3>
                </div>

                <MDBInput
                  label="Your Name"
                  group
                  type="text"
                  value={name}
                  onChange={updateName}
                  validate
                />

                <MDBInput
                  label="Last Name"
                  group
                  type="text"
                  value={lastName}
                  onChange={updateLastName}
                  validate
                />

                <MDBInput
                  label="Your email"
                  group
                  type="text"
                  value={email}
                  onChange={updateEmail}
                  validate
                  placeholder="example@domain.com"
                />
                <MDBInput
                  label="Your password"
                  group
                  type="password"
                  value={password}
                  onChange={updatePassword}
                  validate
                />

                <MDBInput
                  label="Your Country"
                  group
                  type="text"
                  value={country}
                  onChange={updateContry}
                  validate
                />

                <MDBInput
                  label="Your Phone"
                  group
                  type="text"
                  value={phone}
                  onChange={updatePhone}
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
                      REGISTRARSE
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol
                    md="12"
                    className="d-flex flex-row justify-content-center "
                  >
                    <p className="font-small grey-text mr-2 mt-1">
                      Ya tienes cuenta?{" "}
                    </p>

                    <Link to="/login">Login</Link>
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
  else {
    return (
      <div>
        <h2>Por el momento solo administradores tienen acceso a esta pagina</h2>
        <h2>Eventualmente nuestros usuarios podran crearse su propia cuenta</h2>
        <Link to="/">
          <MDBBtn>VOLVER</MDBBtn>
        </Link>
      </div>
    );
  }
};

export default Signup;
