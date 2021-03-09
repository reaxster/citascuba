import React from "react";
import { MDBCol } from "mdbreact";

function MessageLog(props) {
  // const { timestamp, read, message, sender } = props.data;
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;

  return (
    <MDBCol
      size={12}
      className=" shadow px-5 jumbotron m-0 p-0 my-2"
      style={{ border: "1px solid #880E4F" }}
    >
      <div className="d-flex justify-content-between align-items-center mt-3">
        <h6 className="">
          <strong>RICHAR MARSHALL</strong>
        </h6>
        <h6 className="">
          <strong>UNREAD</strong>
        </h6>
        <h6 className="">
          <strong>{today}</strong>
        </h6>
      </div>
      <hr />
      <div className="text-justify ">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop p
        </p>
      </div>
    </MDBCol>
  );
}

export default MessageLog;
