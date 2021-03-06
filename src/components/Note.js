import React from "react";
import { MDBIcon } from "mdbreact";

export default (props) => {
  const listData = props.data.list.map((item, index) => (
    <li style={{ textAlign: "left" }} key={index}>
      {item}
    </li>
  ));

  return (
    <div
      style={{ border: "#EF5350 3px solid", borderRadius: 10 }}
      className="p-2 pt-3"
    >
      <div className="d-flex justify-content-center align-items-center ">
        <div className="mr-3 ">
          <MDBIcon icon="info-circle" size="2x" style={{ color: "#FF6F00" }} />
        </div>
        <h5>
          <strong>{props.data.title}</strong>
        </h5>
      </div>

      <hr style={{ width: "80%" }} />
      <ol>{listData}</ol>
    </div>
  );
};
