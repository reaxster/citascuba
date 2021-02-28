import {
  MDBCol,
  MDBInput,
  MDBRow,
  MDBSelect,
  MDBSelectInput,
  MDBSelectOptions,
  MDBSelectOption,
} from "mdbreact";
import React, { useContext, useState } from "react";
import useFormHook from "../../../../hooks/useFormHook";
import { convertFromMMDDYYYYtoYYYYMMDD } from "../../../../Utils/Date/DateUtil";
import useToggle from "../../../../hooks/useToggle";
import Admin_Confirmation from "../notification and modal/Admin_Confirmation";
import Modal from "../notification and modal/Modal";
import axios from "axios";
import { AuthContext } from "../../../../contexs/useAuthContext";

export default (props) => {
  const auth = useContext(AuthContext);

  const [visa, updateVisa, resetVisa] = useFormHook(props.data.visa);
  const [cc, updateCC, resetCC] = useFormHook(
    convertFromMMDDYYYYtoYYYYMMDD(props.data.cc)
  );
  const [ent, updateEnt, resetEnt] = useFormHook(
    convertFromMMDDYYYYtoYYYYMMDD(props.data.ent)
  );
  const [exp, updateExp, resetExp] = useFormHook("No");

  const [id, updateId] = useState(props.data._id);
  const [submiting, setSubmitting] = useState(false);

  const [showModal, handleShowModal] = useToggle(false);

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
        dataToUpdate,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
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
        "d-flex shadow flex-md-row flex-column justify-content-center  justify-content-md-around align-items-md-center w-75 my-3 h-100"
      }
      style={{ border: "#f48fb1  solid 2px", borderRadius: 10 }}
    >
      {showModal && (
        <Modal
          handleClose={handleShowModal}
          show={showModal}
          message="You record has been updated"
          is_reload={true}
        />
      )}

      <MDBCol className="mt-2 d-flex flex-column justify-content-between h-100 w-100">
        <h5>
          <strong>Update Info</strong>
        </h5>
        <hr />

        <div className="d-flex flex-column align-items-start m-0 p-0">
          <label htmlFor="form-visa">Select your Visa</label>
          <select
            value={visa}
            id="form-visa"
            onChange={updateVisa}
            className="browser-default custom-select"
          >
            <option>{visa}</option>
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
          </select>
        </div>

        <MDBInput
          label="Caso Cerrado"
          type="date"
          value={cc}
          id="form-cc"
          className="form-control"
          onChange={updateCC}
          name="cc"
        />

        <MDBInput
          label="Interview Date"
          type="date"
          id="form-ent"
          value={ent}
          className="form-control"
          onChange={updateEnt}
          name="ent"
        />

        <div className="d-flex flex-column align-items-start m-0 p-0">
          <label htmlFor="form-exp">Visa Expedite</label>
          <select
            className="form-control"
            name="exp"
            id="form-exp"
            value={exp}
            onChange={updateExp}
          >
            <option value="No">No</option>
            <option value="Si">Si</option>
          </select>
        </div>

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
