const Pickup = require('..//models/notifycollector');

class PickupController {
  static async create(req, res) {
    try {
      const {
        contact,
        Address,
        nearestYard,
        sDate,
        sTime,
        itemDetails,
        collectorYard,
        collectorId,
      } = req.body;

      const pickup = new Pickup({
        contact,
        Address,
        nearestYard,
        sDate,
        sTime,
        itemDetails,
        collectorYard,
        collectorId,
      });

      await pickup.save();

      res.status(201).json({ message: 'Pickup created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = PickupController;
