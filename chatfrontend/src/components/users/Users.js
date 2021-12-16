import { React, useState } from "react";
import List from "../list.js/List";

import "./users.css";

export default function Users() {
  const [chat, setChat] = useState(false);

  const handleClick = () => {
    setChat(!false);
  };
  return (
    <div className="users">
      <div className="menu">
        <div className="warapper">
          <div className="chat_header">
            <p className="manuInput">
              {" "}
              All message<i id="arrow" className="fas fa-angle-down"></i>
            </p>
            <i className="fas fa-cog"></i>
          </div>

          <List onClick={handleClick} />
        </div>
      </div>
      {chat ? (
          <div className="online">
          <div className="onlineWarapper">
            <h1>personal chat</h1>
          </div>
        </div>
        
      ) : (
        <div className="online">
          <div className="onlineWarapper">
           <img src="/assets/chatImg.jpg" className='chatImg' alt="chatting img"/>
           <h1 className="onlineWrapper_heading">Securly spreading the wings of your words</h1>
          </div>
        </div>
      )}
    </div>
  );
}
