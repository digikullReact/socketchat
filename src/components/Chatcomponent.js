import React, { useEffect } from "react";
import { io } from "socket.io-client";
import Messagebody from "./messages/Messagebody";
import Messagefooter from "./messages/Messagefooter";
import Messageheader from "./messages/Messageheader";

const Chatcomponent = () => {
  const socket = io("http://localhost:3001");

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="container-fluid row">
      <div className="col-md-8 bg-info">
        <Messageheader />
        <Messagebody />
        <Messagefooter />
      </div>

      <div className="col-md-4 bg-dark h-100">
          <p>Hellow</p>
      </div>
    </div>
  );
};

export default Chatcomponent;
