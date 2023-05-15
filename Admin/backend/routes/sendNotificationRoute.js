const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const NotifyCollector = require("../models/notifycollector");
router.post("/", async (req, res) => {
  try {
    const notifyCollector = new NotifyCollector(req.body);
    await notifyCollector.save();
    res.status(201).json(notifyCollector);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
