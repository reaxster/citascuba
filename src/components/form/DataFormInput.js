import React from "react";
import { MDBCol, MDBRow } from "mdbreact";

function DataFormInput(props) {
  if (props.type === "select") {
    console.log(props.options);
    const options = props.options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ));
    return (
      <MDBCol lg="4" className="mb-4">
        <label htmlFor={props.id}>{props.label}</label>
        <select
          className="form-control"
          id={props.id}
          value={props.value}
          onChange={props.onChange}
        >
          {options}
        </select>
      </MDBCol>
    );
  }

  return (
    <MDBCol size={props.size == undefined ? "4" : props.size} className="mb-4">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        className="form-control"
        type={props.type ? props.type : "input"}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        required={props.required}
      />
    </MDBCol>
  );
}

export default DataFormInput;
