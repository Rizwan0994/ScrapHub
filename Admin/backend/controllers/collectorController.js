// collectorController.js
const bcrypt = require('bcrypt');
const Collector = require("..//models/collectorSchema");

class CollectorController {

  async createCollector(req, res) {
    try {
      const { password, ...rest } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const collector = new Collector({ password: hashedPassword, ...rest });
      await collector.save();
      res.status(201).send(collector);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  async getAllCollectors(req, res) {
    try {
      const collectors = await Collector.find();
      res.send(collectors);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getCollectorById(req, res) {
    try {
      const collector = await Collector.findById(req.params.id);
      if (!collector) {
        return res.status(404).send();
      }
      res.send(collector);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async updateCollector(req, res) {
    try {
      const collector = await Collector.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!collector) {
        return res.status(404).send();
      }
      res.send(collector);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async deleteCollector(req, res) {
    try {
      const collector = await Collector.findByIdAndDelete(req.params.id);
      if (!collector) {
        return res.status(404).send();
      }
      res.send(collector);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = CollectorController;
