import React, { useState } from "react";
import { MDBBtn, MDBIcon } from "mdbreact";
import axios from "axios";
import Admin_Confirmation from "./Admin_Confirmation";

export default (props) => {
  const [submitting, setSubmitting] = useState(false);

  const deleteData = async () => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/cases/${props.data._id}`
      );
      alert(res.data + " STATUS: " + res.status);
      setSubmitting(false);
    } catch (err) {
      alert(err);
    }
  };

  const approveData = async () => {
    const dataToUpdate = {
      approved: true,
      id: props.data._id,
    };
    try {
      const res = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/cases/approve/${props.data._id}`,
        dataToUpdate
      );
      alert(res.data + " STATUS: " + res.status);
      setSubmitting(false);
    } catch (err) {
      alert(err);
    }
  };

  const handleDelete = () => {
    setSubmitting(true);

    deleteData();
  };

  const handleApprove = () => {
    setSubmitting(true);
    approveData();
  };

  const iconStyle = { fontSize: "25px" };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center align-items-md-stretch">
      <Admin_Confirmation
        title="Confirm Submission"
        className="d-flex justify-content-center"
        modalHandler={handleApprove}
        disableOnSubmit={submitting}
        isIcon={true}
        modalMessage="Confirm you want to approve this record"
        is_reload={true}
      >
        <i className="fas fa-check" size="2x" style={iconStyle} />
      </Admin_Confirmation>

      <Admin_Confirmation
        className="d-flex justify-content-center"
        modalHandler={props.on_edit}
        disableOnSubmit={submitting}
        isIcon={true}
        modalMessage="Please confirm you want to Edit this record"
        color="warning"
      >
        <i className="fas fa-tools" size="2x" style={iconStyle} />
      </Admin_Confirmation>

      <Admin_Confirmation
        className="d-flex justify-content-center"
        modalHandler={handleDelete}
        disableOnSubmit={submitting}
        isIcon={true}
        color="danger"
        modalMessage="Confirm you want to DELETE this record"
        is_reload={true}
      >
        <i className="far fa-trash-alt" style={iconStyle} />
      </Admin_Confirmation>

      {/* <MDBBtn
        className="d-flex justify-content-center px-3 py-2"
        onClick={handleApprove}
        disabled={submitting}
      >
        <i className="fas fa-tools" size="2x" style={iconStyle} />
      </MDBBtn>
      <MDBBtn
        className="d-flex justify-content-center px-3 py-2 warning-color"
        onClick={props.on_edit}
        disabled={submitting}
      >
        <i className="fas fa-tools" size="2x" style={iconStyle} />
      </MDBBtn>
      <MDBBtn
        className=" d-flex justify-content-center px-3 py-2 danger-color"
        onClick={handleDelete}
        disabled={submitting}
      >
        <i className="far fa-trash-alt" style={iconStyle} />
      </MDBBtn>*/}
    </div>
  );
};
