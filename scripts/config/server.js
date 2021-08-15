import express from "express";
import path from "path";

// server variables
const server = express();

// middleware
server.use(express.json());
server.use(express.static(path.join(__dirname, "../build")));

// export server
export { server };
