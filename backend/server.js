const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const query=require("./connection")

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer, { cors: {
  origin: ["http://localhost:3000"],
 
} });

io.on("connection", (socket) => {
  console.log("Socket Connected")


  socket.on("disconnect", (reason) => {
    // ...
    console.log("Socket Disconnected",reason);

  });


  socket.on("message", (message) => {
    // ...
    console.log(message);

    socket.emit("dingdong","jeiii");

    // Save the messages  in the db 

    const insert=`INSERT INTO messages (message, senttime) VALUES ('${message}', CURRENT_TIMESTAMP)`

    query(insert).then(data=>{
      console.log(data);
    }).catch(err=>{
      console.log(err);
    })

    socket.broadcast.emit("receivemessage", { message: message ,sender:"else"}); // everyone gets it but the sender


  });

 
});

httpServer.listen(3001,()=>{
    console.log("Server Running")
});