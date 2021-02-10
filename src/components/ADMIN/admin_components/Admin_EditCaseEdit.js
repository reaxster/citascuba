import { MDBBtn, MDBCol, MDBInput, MDBRow } from "mdbreact";
import React from "react";
import { convertFromMMDDYYYYtoYYYYMMDD } from "../../../Utils/Date/DateUtil";

export default (props) => {
  console.log(
    "PRINTING DATE+ ----------" + convertFromMMDDYYYYtoYYYYMMDD(props.data.cc)
  );
  return (
    <MDBRow
      className={
        "d-flex flex-md-row flex-column justify-content-center  justify-content-md-around align-items-md-center"
      }
      style={{ border: "#f48fb1  solid 2px", borderRadius: 10 }}
    >
      <MDBCol>
        <select
          className="browser-default custom-select mt-5"
          name="visa"
          id="form-visa"
          value={props.data.visa}
          onChange={props.handleChange}
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
          value={convertFromMMDDYYYYtoYYYYMMDD(props.data.cc)}
          className="m-0 p-0"
          onChange={props.handleChange}
          name="cc"
        />
        <MDBInput
          type="date"
          value={convertFromMMDDYYYYtoYYYYMMDD(props.data.ent)}
          className="m-0 p-0"
          onChange={props.handleChange}
          name="ent"
        />
        <MDBInput
          label="Expedite"
          checked={props.data.exp.valueOf() === "No".valueOf() ? false : true}
          type="checkbox"
          id="checkbox1"
          name="exp"
        />
        <MDBBtn onClick={props.handleUpdateRecord} disabled={props.submitting}>
          Update
        </MDBBtn>
      </MDBCol>
    </MDBRow>
  );
};
