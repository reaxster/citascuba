import React, { useEffect, useState } from "react";
import MessageLog from "./MessageLog";
import MessageText from "./MessageText";

//https://scotch.io/courses/using-react-router-4/route-params
function Message(props) {
  const [messageID, setMessageID] = useState("");

  useEffect(() => {
    const id = props.match.params.id;
    setMessageID(id);
    console.log(id);
  });

  return (
    <div className="d-flex container  flex-column align-items-center justify-content-center">
      <h1>This is The Message Page</h1>
      <h2>{messageID}</h2>
      <MessageText />
      <MessageLog />
      <MessageLog />
      <MessageLog />
    </div>
  );
}

export default Message;
