import React, { useContext, useState } from "react";

import axios from "axios";
import Admin_Confirmation from "../notification and modal/Admin_Confirmation";
import Admin_NoConfirmation from "../notification and modal/Admin_NoConfirmation";
import Modal from "../notification and modal/Modal";
import useToggle from "../../../../hooks/useToggle";
import { AuthContext } from "../../../../contexs/useAuthContext";

export default (props) => {
  const auth = useContext(AuthContext);

  const [submitting, setSubmitting] = useState(false);
  const [showModalApprove, handleShowModalApprove] = useToggle(false);
  const [showModalDelete, handleShowModalDelete] = useToggle(false);

  const deleteData = async () => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/cases/${props.data._id}`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
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
        dataToUpdate,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
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

  const iconStyle = { fontSize: "20px" };
  return (
    <div>
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
        <i className="far fa-trash-alt" size="2x" style={iconStyle} />
      </Admin_Confirmation>
    </div>
  );
};
