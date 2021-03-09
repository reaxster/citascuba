import React from "react";
import useToggle from "../../../hooks/useToggle";
import {
  MDBIcon,
  MDBSideNavCat,
  MDBSideNavNav,
  MDBSideNav,
  MDBSideNavLink,
  MDBRow,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import "../../components.css";

const Admin_SideNav = (props) => {
  const [isOpen, toggleIsOpen] = useToggle(false);

  const handleClose = () => {
    toggleIsOpen(false);
  };

  return (
    <div className="m-0 d-flex justify-content-end justify-content-md-center">
      <MDBRow className="btnAdminFix w-100 ">
        <div
          onClick={toggleIsOpen}
          className="d-flex  justify-content-end align-items-center"
          style={{ maxWidth: "100%" }}
        >
          <MDBIcon className="fas fa-angle-double-right slideMe" size="2x" />
        </div>
      </MDBRow>

      <MDBSideNav
        logo=""
        hidden
        triggerOpening={isOpen}
        breakWidth={1300}
        className="sideMenu"
      >
        <hr style={{ backgroundColor: "white" }} />
        <div className="mt-3 mb-0 d-flex flex-row justify-content-center align-items-center">
          <span className="mx-2 w-50">
            <a
              href="#"
              target="_blank"
              className="m-0 p-0"
              onClick={handleClose}
            >
              <MDBIcon fab icon="facebook-f" size="2x" className="text-white" />
            </a>
          </span>

          <span className="mx-2 w-50">
            <a
              href="#!"
              target="_blank"
              className="m-0 p-0"
              onClick={handleClose}
            >
              <MDBIcon fab icon="instagram" size="2x" className="text-white" />
            </a>
          </span>

          <span className="mx-2 w-50">
            <a
              href="#!"
              target="_blank"
              className="m-0 p-0"
              onClick={handleClose}
            >
              <MDBIcon fab icon="twitter" size="2x" className="text-white" />
            </a>
          </span>
        </div>
        <hr style={{ backgroundColor: "white" }} />

        <MDBSideNavNav className="d-flex flex-column justify-content-start">
          <MDBSideNavCat
            name="My Profile"
            id="contact-me"
            iconRegular
            icon="fas fa-user"
            className="d-flex  justify-content-start align-items-center"
          >
            <MDBSideNavLink
              onClick={handleClose}
              className="d-flex justify-content-start"
            >
              Profile
            </MDBSideNavLink>
            <MDBSideNavLink
              onClick={handleClose}
              className="d-flex justify-content-start"
            >
              Write a message
            </MDBSideNavLink>
          </MDBSideNavCat>

          <MDBSideNavCat
            name="Manage Users"
            id="submit-blog"
            icon="fas fa-user-cog"
            className="d-flex  justify-content-start align-items-center"
          >
            <MDBSideNavLink
              onClick={handleClose}
              className="d-flex justify-content-start"
            >
              Users
            </MDBSideNavLink>
            <MDBSideNavLink
              onClick={handleClose}
              className="d-flex justify-content-start"
              to="/signup"
            >
              Register User
            </MDBSideNavLink>
          </MDBSideNavCat>

          <MDBSideNavCat
            name="Manage Posts"
            id="instruction"
            iconRegular
            icon="fas fa-file-alt"
            href="#"
            className="d-flex  justify-content-start align-items-center"
          >
            <MDBSideNavLink
              onClick={handleClose}
              className="d-flex justify-content-start"
            >
              View Posts
            </MDBSideNavLink>
            <MDBSideNavLink
              onClick={handleClose}
              className="d-flex justify-content-start"
            >
              Create Post
            </MDBSideNavLink>
            <MDBSideNavLink
              onClick={handleClose}
              className="d-flex justify-content-start"
            >
              Create News
            </MDBSideNavLink>
          </MDBSideNavCat>

          <MDBSideNavCat
            name="Messages"
            id="about"
            icon="far fa-envelope"
            className="d-flex  justify-content-start align-items-center"
          >
            <MDBSideNavLink
              onClick={handleClose}
              className="d-flex justify-content-start"
            >
              User Messages
            </MDBSideNavLink>
            <MDBSideNavLink
              onClick={handleClose}
              className="d-flex justify-content-start"
            >
              Admin Messages
            </MDBSideNavLink>
            <MDBSideNavLink
              onClick={handleClose}
              className="d-flex justify-content-start"
            >
              External Messages
            </MDBSideNavLink>
            <MDBSideNavLink
              onClick={handleClose}
              className="d-flex justify-content-start"
            >
              Compose Message
            </MDBSideNavLink>
          </MDBSideNavCat>

          <MDBSideNavCat
            name="Notifications"
            id="about"
            icon="far fa-bell"
            className="d-flex  justify-content-start align-items-center"
          >
            <MDBSideNavLink
              onClick={handleClose}
              className="d-flex justify-content-start"
            >
              Notifications
            </MDBSideNavLink>
          </MDBSideNavCat>
        </MDBSideNavNav>
      </MDBSideNav>
    </div>
  );
};

export default Admin_SideNav;
