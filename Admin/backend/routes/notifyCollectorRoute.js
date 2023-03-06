const express = require("express");
const router = express.Router();
const protect = require("../middleWare/authMiddleware");
const addNotifyController = require("../controllers/notifyCollectorController");

router.post("/", addNotifyController);

module.exports = router;