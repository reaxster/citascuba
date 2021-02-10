import React from "react";

export default (props) => {
  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <h6>
        <strong>Record: {props.data.record}</strong>
      </h6>
      <h6>
        <strong>Visa: {props.data.visa}</strong>
      </h6>
      <h6>
        <strong>CC: {props.data.cc}</strong>
      </h6>
      <h6>
        <strong>Entrevista: {props.data.ent}</strong>
      </h6>
      <h6>
        <strong>Expedite: {props.data.exp}</strong>
      </h6>
    </div>
  );
};
