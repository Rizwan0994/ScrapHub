const express = require("express");
const router = express.Router();
const protect = require("../middleWare/authMiddleware");
const addNotifyController = require("../controllers/notifyCollectorController");

const pickupController = new addNotifyController();
// Route to handle creating a new pickup
router.post('/', async (req, res) => {
    await pickupController.create(req, res);
  });


module.exports = router;