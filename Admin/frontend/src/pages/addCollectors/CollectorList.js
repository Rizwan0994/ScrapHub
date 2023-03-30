import React, { useState, useEffect } from "react";
import "./CollectorList.css";

function CollectorList() {
  const [collectors, setCollectors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/collectors/')
      .then((response) => response.json())
      .then((data) => setCollectors(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="collector-list-container">
      <h1 className="collector-list-heading">Collector List</h1>
      <ul className="collector-list">
        {collectors.map((collector) => (
          <li key={collector._id} className="collector-item">
            <p><strong>Name:</strong> {collector.name}</p>
            <p><strong>Contact:</strong> {collector.contact}</p>
            <p><strong>Address:</strong> {collector.address}</p>
            <p><strong>Pickup Area:</strong> {collector.pickupArea}</p>
            <p><strong>Email:</strong> {collector.email}</p>
            <p><strong>Password:</strong> {collector.password}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CollectorList;
