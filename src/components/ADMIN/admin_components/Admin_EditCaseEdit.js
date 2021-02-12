import { MDBCol, MDBInput, MDBRow } from "mdbreact";
import React, { useState } from "react";
import useFormHook from "../../../hooks/useFormHook";
import { convertFromMMDDYYYYtoYYYYMMDD } from "../../../Utils/Date/DateUtil";
import useToggle from "../../../hooks/useToggle";
import Admin_Confirmation from "./notification and modal/Admin_Confirmation";
import Modal from "./notification and modal/Modal";
import axios from "axios";

export default (props) => {
  const [visa, updateVisa, resetVisa] = useFormHook(props.data.visa);
  const [cc, updateCC, resetCC] = useFormHook(
    convertFromMMDDYYYYtoYYYYMMDD(props.data.cc)
  );
  const [ent, updateEnt, resetEnt] = useFormHook(
    convertFromMMDDYYYYtoYYYYMMDD(props.data.ent)
  );
  const [exp, updateExp] = useToggle(
    props.data.exp.localeCompare("No") == 0 ? false : true
  );
  const [id, updateId] = useState(props.data._id);
  const [submiting, setSubmitting] = useState(false);

  const [showModal, handleShowModal] = useToggle(false);

  console.log("-------------------------");
  console.log(props.data.exp);
  console.log(exp);

  const updateData = async () => {
    const dataToUpdate = {
      visa,
      cc,
      ent,
      exp,
      id,
    };
    try {
      const res = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/cases/${id}`,
        dataToUpdate
      );
      handleShowModal(true);
      setSubmitting(false);
    } catch (err) {
      alert(err);
    }
  };

  const handleToggle = (e) => {
    updateExp(!exp);
    console.log(exp);
  };

  const handleSubmit = (e) => {
    setSubmitting(true);
    updateData();
  };

  return (
    <MDBRow
      className={
        "d-flex flex-md-row flex-column justify-content-center  justify-content-md-around align-items-md-center"
      }
      style={{ border: "#f48fb1  solid 2px", borderRadius: 10 }}
    >
      <Modal
        handleClose={handleShowModal}
        show={showModal}
        message="You record has been updated"
        is_reload={true}
      />

      <MDBCol>
        <select
          className="browser-default custom-select mt-5"
          name="visa"
          id="form-visa"
          value={visa}
          onChange={updateVisa}
          required
        >
          <option value="">Select Visa</option>
          <option value="CR1/IR1">CR1/IR1</option>
          <option value="CR2/IR2">CR2/IR2</option>
          <option value="IR3">IR3</option>
          <option value="IR4">IR4</option>
          <option value="IR5">IR5</option>
          <option value="F1">F1</option>
          <option value="F2A">F2A</option>
          <option value="F2B">F2B</option>
          <option value="F3">F3</option>
          <option value="F4">F4</option>
          <option value="K1">K1</option>
          <option value="K2">K2</option>
          <option value="K3">K3</option>
          <option value="K4">K4</option>
        </select>{" "}
        <MDBInput
          type="date"
          value={cc}
          className="m-0 p-0"
          onChange={updateCC}
          name="cc"
        />
        <MDBInput
          type="date"
          value={ent}
          className="m-0 p-0"
          onChange={updateEnt}
          name="ent"
        />
        <MDBInput
          label="Expedite"
          checked={exp}
          value={exp}
          onClick={handleToggle}
          type="checkbox"
          id="checkbox1"
          name="exp"
        />
        <Admin_Confirmation
          className="d-flex justify-content-center"
          modalHandler={handleSubmit}
          disableOnSubmit={submiting}
          isIcon={false}
          color="danger"
          modalMessage="Are you sure you want to update record?"
          is_reload={false}
        >
          Update
        </Admin_Confirmation>
      </MDBCol>
    </MDBRow>
  );
};
