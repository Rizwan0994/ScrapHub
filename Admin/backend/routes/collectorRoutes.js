// collectorRoutes.js

const express = require("express");
const CollectorController = require("../controllers/collectorController");

const collectorRouter = express.Router();
const collectorController = new CollectorController();

collectorRouter.post("/", collectorController.createCollector);
collectorRouter.get("/", collectorController.getAllCollectors);
collectorRouter.get("/collectors/:id", collectorController.getCollectorById);
collectorRouter.put("/collectors/:id", collectorController.updateCollector);
collectorRouter.delete("/collectors/:id", collectorController.deleteCollector);

module.exports = collectorRouter;
