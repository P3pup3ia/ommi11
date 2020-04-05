const express = require("express");
const router = require("./router");
const cors = require("cors");

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(router);
  }
}

module.exports = new App().server;
