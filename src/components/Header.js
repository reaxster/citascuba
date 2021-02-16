import React, { useState, useContext, useReducer } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
} from "mdbreact";
import { AuthContext } from "../contexs/useAuthContext";
import "./components.css";

const handleTabChange = (state, action) => {
  const defaultState = {
    home: false,
    form: false,
    table: false,
    waitingTimes: false,
    disclosure: false,
    admin: false,
    login: false,
  };

  switch (action.type) {
    case "HOME":
      return { ...defaultState, home: true };
    case "FORM":
      return { ...defaultState, form: true };
    case "TABLE":
      return { ...defaultState, table: true };
    case "VISASUMMARY":
      return { ...defaultState, waitingTimes: true };
    case "DISCLOSURE":
      return { ...defaultState, disclosure: true };
    case "ADMIN":
      return { ...defaultState, admin: true };
    case "LOGIN":
      return { ...defaultState, login: true };
    default:
      return state;
  }
};

const Header = () => {
  const auth = useContext(AuthContext);

  const [state, dispatch] = useReducer(handleTabChange, {
    home: true,
    form: false,
    table: false,
    waitingTimes: false,
    disclosure: false,
    admin: false,
    login: false,
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleChangeTab = (e) => {
    dispatch({ type: e.target.name });
    console.log(e.target.name);
    setIsOpen(false);
  };

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MDBNavbar className="header" dark expand="md">
      <MDBNavbarNav left>
        <MDBNavbarBrand>
          <MDBNavItem className="mx-2" active={state.home}>
            <MDBNavLink
              className="whiteLink"
              to="/"
              onClick={handleChangeTab}
              name="HOME"
            >
              <MDBIcon icon="home" size="1x" />
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarBrand>
      </MDBNavbarNav>

      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav right>
          <MDBNavItem className="mx-2" active={state.form}>
            <MDBNavLink to="/form" name="FORM" onClick={handleChangeTab}>
              Formulario
            </MDBNavLink>
          </MDBNavItem>

          <MDBNavItem className="mx-2" active={state.table}>
            <MDBNavLink to="/table" name="TABLE" onClick={handleChangeTab}>
              Tabla
            </MDBNavLink>
          </MDBNavItem>

          <MDBNavItem className="mx-2" active={state.waitingTimes}>
            <MDBNavLink
              to="/interviewsummary"
              name="VISASUMMARY"
              onClick={handleChangeTab}
            >
              Resumen
            </MDBNavLink>
          </MDBNavItem>

          <MDBNavItem active={state.disclosure}>
            <MDBNavLink
              className="mx-2"
              to="/disclosure"
              name="DISCLOSURE"
              onClick={handleChangeTab}
            >
              Disclosure
            </MDBNavLink>
          </MDBNavItem>

          {!auth.isLoggedIn && (
            <MDBNavItem className="mx-2" active={state.login}>
              <MDBNavLink to="/login" name="LOGIN" onClick={handleChangeTab}>
                Login
              </MDBNavLink>
            </MDBNavItem>
          )}

          {auth.isLoggedIn && (
            <MDBNavItem className="mx-2" active={state.admin || state.login}>
              <MDBNavLink to="/admin" name="ADMIN" onClick={handleChangeTab}>
                Admin Dashboard
              </MDBNavLink>
            </MDBNavItem>
          )}

          {auth.isLoggedIn && (
            <MDBNavItem className="mx-2" onClick={auth.logout}>
              <MDBNavLink to="/login" name="HOME" onClick={handleChangeTab}>
                Logout
              </MDBNavLink>
            </MDBNavItem>
          )}
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Header;
