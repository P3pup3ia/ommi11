const routes = require("express").Router();

const sessionController = require("./controllers/SessionController");
const ongController = require("./controllers/OngController");
const incidentController = require("./controllers/incidentcontroller");
const profileController = require("./controllers/profileController");

routes.post("/session", sessionController.create);

routes.get("/ongs", ongController.index);
routes.post("/ongs", ongController.create);

routes.get("/profile", profileController.index);

routes.get("/incidents", incidentController.index);
routes.post("/incidents", incidentController.create);
routes.delete("/incidents/:id", incidentController.delete);

routes.get("/", (req, res) => {
  const data = req.body;
  res.send({ menssage: "My Hero is Runnig" });
});

module.exports = routes;
