import React, { useEffect } from "react";
import { io } from "socket.io-client";

import Mainmessages from './messages/Mainmessages'


const Chatcomponent = () => {
  const socket = io("http://localhost:3001");

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="container-fluid row">

      <div style={{height:'100vh'}} className="col-md-8 bg-light bg-dark">
       <Mainmessages/>
       
      </div>

      <div className="col-md-4">
          <p>Hellow</p>
      </div>

    </div>
  );
};

export default Chatcomponent;
