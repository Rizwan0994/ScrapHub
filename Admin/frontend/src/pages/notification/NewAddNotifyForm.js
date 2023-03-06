import React, { useState } from 'react';
import axios from 'axios';
import "./addnotificationform.css";
function NewAddNotifyForm() {
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [nearestYard, setNearestYard] = useState('');
  const [sDate, setSDate] = useState('');
  const [sTime, setSTime] = useState('');
  const [itemDetails, setItemDetails] = useState('');
  const [collectorYard, setCollectorYard] = useState('');
  const [collectorId, setCollectorId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/notifyController/', {
        contact,
        Address: address,
        nearestYard,
        sDate,
        sTime,
        itemDetails,
        collectorYard,
        collectorId,
      });

      alert('Notification send successfully');
    } catch (error) {
      console.error(error);
      alert('Error creating pickup');
    }
  };

  return (
    <div class="pickup-card">
  <h2>Create Pickup</h2>
    <form onSubmit={handleSubmit}>
      <label class="form-group">
        Contact:
        <input type="text" value={contact} onChange={(event) => setContact(event.target.value)} required />
      </label>
      <label>
        Address:
        <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} required />
      </label>
      <label>
        Nearest Yard:
        <input type="text" value={nearestYard} onChange={(event) => setNearestYard(event.target.value)} required />
      </label>
      <label>
        Date:
        <input type="date" value={sDate} onChange={(event) => setSDate(event.target.value)} required />
      </label>
      <label>
        Time:
        <input type="time" value={sTime} onChange={(event) => setSTime(event.target.value)} required />
      </label>
      <label>
        Item Details:
        <textarea value={itemDetails} onChange={(event) => setItemDetails(event.target.value)} required />
      </label>
      <label>
        Collector Yard:
        <input type="text" value={collectorYard} onChange={(event) => setCollectorYard(event.target.value)} required />
      </label>
      <label>
        Collector ID:
        <input type="text" value={collectorId} onChange={(event) => setCollectorId(event.target.value)} required />
      </label>
      <div class="form-group">
      <button type="submit">Create Pickup</button>
    </div>
    </form>
    </div>
  );
}

export default NewAddNotifyForm;
