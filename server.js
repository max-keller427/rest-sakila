const express = require("express");
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//Access Control Privileges
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Import and set paths for API versions
//api_v1
const apiv1 = require("./api_v1/api.js");
server.use("/api_v1", apiv1);
//api_v2
const apiv2 = require("./api_v2/api.js");
server.use("/api_v2", apiv2);

//Default Path
server.get("/", (req, res) => {
  res.status(200).json({ hello: `World!` });
});

module.exports = server;
