import React, { useEffect, useState } from "react";
import axios from "axios";

//https://scotch.io/courses/using-react-router-4/route-params
function MessagesPage(props) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    async function getEmails() {
      try {
        const res = await axios.get(
          process.env.REACT_APP_BACKEND_URL + "/contact/messages"
        );
        setMessages(res.data);
        console.log(messages);
      } catch (err) {
        alert("CANNOT GET YOUR MESSAGES");
      }
    }

    getEmails();
  }, []);
  const messageID = 0;
  return (
    <div className="d-flex container  flex-column align-items-center justify-content-center"></div>
  );
}

export default MessagesPage;
