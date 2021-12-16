import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Info from "./info/Info";

import Mainmessages from "./messages/Mainmessages";

const Chatcomponent = () => {
  const socket = io("http://localhost:3001");

  const [show, setShow] = useState(true);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="container-fluid row">
      <>
      {
        show ?
        <>
        <div style={{ height: "100vh" }} className="col-md-9 bg-light bg-dark">
        <Mainmessages />
      </div>
      <div className="col-md-3">
        <Info />
      </div>
        </>
        :
        <div style={{ height: "100vh" }} className="col-md-9 bg-light bg-dark">
        <Mainmessages />
      </div>
      }
      </>

    </div>
  );
};

export default Chatcomponent;
