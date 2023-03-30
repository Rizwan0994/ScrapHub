import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./addnotificationform.css";
const regex = /^[a-zA-Z0-9 ]+$/;

function NewAddNotifyForm() {
  const [contact, setContact] = useState(localStorage.getItem('contact') || '');
  const [address, setAddress] = useState(localStorage.getItem('address') || '');
  const [nearestYard, setNearestYard] = useState(localStorage.getItem('nearestYard') || '');
  const [sDate, setSDate] = useState(localStorage.getItem('sDate') || '');
  const [sTime, setSTime] = useState(localStorage.getItem('sTime') || '');
  const [itemDetails, setItemDetails] = useState(localStorage.getItem('itemDetails') || '');
  const [collectorYard, setCollectorYard] = useState(localStorage.getItem('collectorYard') || '');
  const [collectorId, setCollectorId] = useState(localStorage.getItem('collectorId') || '');


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
      // clear form data from localStorage
      localStorage.removeItem('contact');
      localStorage.removeItem('address');
      localStorage.removeItem('nearestYard');
      localStorage.removeItem('sDate');
      localStorage.removeItem('sTime');
      localStorage.removeItem('itemDetails');
      localStorage.removeItem('collectorYard');
      localStorage.removeItem('collectorId');

    } catch (error) {
      console.error(error);
      alert('Error creating pickup');
    }
  };

  const isValid = () => {
    const regex = /^[a-zA-Z0-9 ]+$/; // allow letters, numbers, and spaces
    return (
      regex.test(contact) &&
      regex.test(address) &&
      regex.test(nearestYard) &&
      sDate.trim() !== "" &&
      sTime.trim() !== "" &&
      regex.test(itemDetails) &&
      regex.test(collectorYard) &&
      regex.test(collectorId)
    );
  };


  //save form..........
  // save form data to local storage

   // get form data from local storage on mount

   useEffect(() => {
    // save form data to localStorage whenever a field value changes
    localStorage.setItem('contact', contact);
    localStorage.setItem('address', address);
    localStorage.setItem('nearestYard', nearestYard);
    localStorage.setItem('sDate', sDate);
    localStorage.setItem('sTime', sTime);
    localStorage.setItem('itemDetails', itemDetails);
    localStorage.setItem('collectorYard', collectorYard);
    localStorage.setItem('collectorId', collectorId);
  }, [contact, address, nearestYard, sDate, sTime, itemDetails, collectorYard, collectorId]);

  return (
    <div class="pickup-card">
  <h2>Create Pickup</h2>
  <form onSubmit={handleSubmit}>
      <label className="form-group">
        Contact:
        <input
          type="text"
          value={contact}
          onChange={(event) =>
            regex.test(event.target.value) && setContact(event.target.value)
          }
          required
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          value={address}
          onChange={(event) =>
            regex.test(event.target.value) && setAddress(event.target.value)
          }
          required
        />
      </label>
      <label>
        Nearest Yard:
        <input
          type="text"
          value={nearestYard}
          onChange={(event) =>
            regex.test(event.target.value) && setNearestYard(event.target.value)
          }
          required
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          value={sDate}
          onChange={(event) => setSDate(event.target.value)}
          required
        />
      </label>
      <label>
        Time:
        <input
          type="time"
          value={sTime}
          onChange={(event) => setSTime(event.target.value)}
          required
        />
      </label>
      <label>
        Item Details:
        <textarea
          value={itemDetails}
          onChange={(event) =>
            regex.test(event.target.value) && setItemDetails(event.target.value)
          }
          required
        />
      </label>
      <label>
        Collector Yard:
        <input
          type="text"
          value={collectorYard}
          onChange={(event) =>
            regex.test(event.target.value) && setCollectorYard(event.target.value)
          }
          required
        />
      </label>
      <label>
        Collector ID:
        <input
          type="text"
          value={collectorId}
          onChange={(event) =>
            regex.test(event.target.value) && setCollectorId(event.target.value)
          }
          required
        />
      </label>
      <div className="form-group">
        <button type="submit" disabled={!isValid()}>
          Create Pickup
        </button>
      </div>
    </form>
    </div>
  );
}

export default NewAddNotifyForm;
