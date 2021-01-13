import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import { Link } from "react-router-dom";
import "./components.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState({
    home: true,
    form: false,
    table: false,
    waitingTimes: false,
    disclosure: false,
  });

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleHomeClick = () => {
    setActive({
      home: true,
      form: false,
      table: false,
      waitingTimes: false,
      disclosure: false,
    });
    closeMenu();
  };

  const handleFormClick = () => {
    setActive({
      home: false,
      form: true,
      table: false,
      waitingTimes: false,
      disclosure: false,
    });
    closeMenu();
  };

  const handleTableClick = () => {
    setActive({
      home: false,
      form: false,
      table: true,
      waitingTimes: false,
      disclosure: false,
    });
    closeMenu();
  };

  const handleWaitingTimesClick = () => {
    setActive({
      home: false,
      form: false,
      table: false,
      waitingTimes: true,
      disclosure: false,
    });
    closeMenu();
  };

  const handleDisclosureClick = () => {
    setActive({
      home: false,
      form: false,
      table: false,
      waitingTimes: false,
      disclosure: true,
    });
    closeMenu();
  };

  return (
    <MDBNavbar className="header" dark expand="md">
      <MDBNavbarBrand>
        <MDBNavLink
          className="whiteLink"
          to="/"
          onClick={handleHomeClick}
          active={active.home}
        >
          <strong>Home</strong>
        </MDBNavLink>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav left></MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem className="mx-2" active={active.form}>
            <MDBNavLink to="/form" onClick={handleFormClick}>
              Form
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem className="mx-2" active={active.table}>
            <MDBNavLink to="/table" onClick={handleTableClick}>
              Table
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem className="mx-2" active={active.waitingTimes}>
            <MDBNavLink to="/waitingtimes" onClick={handleWaitingTimesClick}>
              Waiting Times
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem active={active.disclosure}>
            <MDBNavLink
              className="mx-2"
              to="/disclosure"
              onClick={handleDisclosureClick}
            >
              Disclosure
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Header;
