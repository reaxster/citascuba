import React from "react";

export default (props) => {
  const listData = props.data.list.map((item) => <li>{item}</li>);
  return (
    <div
      style={{ border: "#EF5350 3px solid", borderRadius: 10 }}
      className="p-2 pt-3"
    >
      <h4>
        <strong>{props.data.title}</strong>
      </h4>
      <hr style={{ width: "80%" }} />
      <ol className="d-flex flex-column justify-content-start align-items-start">
        {listData}
      </ol>
    </div>
  );
};
