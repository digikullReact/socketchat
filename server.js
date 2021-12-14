const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer, { cors: {
  origin: ["http://localhost:3000"],
 
} });

io.on("connection", (socket) => {
  console.log("Socket Connected")
  // ...
});

httpServer.listen(3001,()=>{
    console.log("Server Running")
});