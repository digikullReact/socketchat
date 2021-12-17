import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Info from "./info/Info";

import Mainmessages from "./messages/Mainmessages";

const Chatcomponent = () => {


  const [show, setShow] = useState(true);
  const [message,setMessage]=useState([]);
  const [socketObj,setSocketObj]=useState(null);

  useEffect(() => {
    const socket = io("http://localhost:3001");

    setSocketObj(socket);

    socket.on("connect", () => {
      console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    });

    socket.on("disconnect", () => {
      console.log(socket.connected); // false
    });

    socket.on("dingdong", (newMessage) => {
      alert("Dingdong")
    });


    socket.on("receivemessage", (newMessage) => {
      console.log(newMessage);
      setMessage([...message,newMessage.message]); // false
    });




    return () => {
      socket.disconnect();

    };
  }, []);

  const sendMessage = (newmsg) => {

    // Send the socket message from here to the server 
    setMessage([...message,{message:newmsg,sender:"me", sentby:"shubham"}]); // false

    socketObj.emit("message",{message:newmsg,sentby:"shubham"});

  }

  return (
    <div className="container-fluid row">




      <div style={{ height: "100vh" }} className="col-md-9 bg-light bg-dark">
        <Mainmessages sendMessage={sendMessage} message={message} />
      </div>

      <div className="col-md-3">
        <Info />
      </div>

    </div>
  );
};

export default Chatcomponent;
