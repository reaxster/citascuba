import React from "react";

const CustomNewsInput = (props) => {
  return (
    <div className="input-group px-2 my-2">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon">
          <i className={props.icon}></i>
        </span>
      </div>
      {props.type && (
        <input
          type={props.type}
          className="form-control"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      )}{" "}
      {!props.type && (
        <textarea
          className="form-control"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      )}
    </div>
  );
};

export default CustomNewsInput;
