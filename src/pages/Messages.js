import React from "react";
import MessageLog from "../components/messages/MessageLog";
import MessageText from "../components/messages/MessageText";

function Messages() {
  return (
    <div className="d-flex container  flex-column align-items-center justify-content-center">
      <h1>This is The Message Page</h1>
      <MessageText />
      <MessageLog />
      <MessageLog />
      <MessageLog />
    </div>
  );
}

export default Messages;
