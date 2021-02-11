import React, { useState } from "react";
import { MDBBtn, MDBIcon } from "mdbreact";
import axios from "axios";
import Admin_Confirmation from "./Admin_Confirmation";
import Admin_NoConfirmation from "./Admin_NoConfirmation";
import Modal from "./modal/Modal";
import useToggle from "../../../hooks/useToggle";

export default (props) => {
  const [submitting, setSubmitting] = useState(false);
  const [showModalApprove, handleShowModalApprove] = useToggle(false);
  const [showModalDelete, handleShowModalDelete] = useToggle(false);

  const deleteData = async () => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/cases/${props.data._id}`
      );
      setSubmitting(false);
      handleShowModalDelete(true);
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

      setSubmitting(false);
      handleShowModalApprove(true);
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
      <Modal
        handleClose={handleShowModalDelete}
        show={showModalDelete}
        message="You record has been Successfully Deleted"
        is_reload={true}
      />
      <Modal
        handleClose={handleShowModalApprove}
        show={showModalApprove}
        message="You record has been Successfully Approved"
        is_reload={true}
      />
      <Admin_Confirmation
        title="Confirm Submission"
        modalHandler={handleApprove}
        disableOnSubmit={submitting}
        isIcon={true}
        modalMessage="Confirm you want to approve this record"
      >
        <i className="fas fa-check" size="2x" style={iconStyle} />
      </Admin_Confirmation>

      <Admin_NoConfirmation modalHandler={props.on_edit} color="warning">
        <i className="fas fa-tools" size="2x" style={iconStyle} />
      </Admin_NoConfirmation>

      <Admin_Confirmation
        modalHandler={handleDelete}
        disableOnSubmit={submitting}
        isIcon={true}
        color="danger"
        modalMessage="Confirm you want to DELETE this record"
      >
        <i className="far fa-trash-alt" style={iconStyle} />
      </Admin_Confirmation>
    </div>
  );
};
