import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Card from "../../components/card/Card";

import "./NotifyForm.scss";

const NotifyForm = ({
  notification,
  
  handleInputChange,
  
  saveProduct,
}) => {
  return (
    <div className="add-product">
      <Card cardClass={"card"}>
        <form onSubmit={saveProduct}>
          <Card cardClass={"group"}>
          </Card>
          <label>Enter Contact :</label>
          <input
            type="text"
            placeholder="User name"
            name="name"
            value={  notification?.name}
            onChange={handleInputChange}
          />

          <label>Address:</label>
          <input
            type="text"
            placeholder="User Address"
            name="Address"
            value={  notification?.category}
            onChange={handleInputChange}
          />

          <label>NearestYard:</label>
          <input
            type="text"
            placeholder=" User NearestYard"
            name="nearestYard"
            value={notification?.price}
            onChange={handleInputChange}
          />

          <label>Schedule Date:</label>
          <input
            type="text"
            placeholder="Date"
            name="sDate"
            value={notification?.sDate}
            onChange={handleInputChange}
          />
       <label>Schedule Time:</label>
          <input
            type="text"
            placeholder="Time"
            name="sTime"
            value={notification?.sTime}
            onChange={handleInputChange}
          />
          <label>Item Details:</label>
          <input
            type="text"
            placeholder="Iron 2kg"
            name="itemDetails"
            value={notification?.itemDetails}
            onChange={handleInputChange}
          />
        <label>Collector Assigned Yard:</label>
          <input
            type="text"
            placeholder="Faislabad"
            name="collectorYard"
            value={notification?.collectorYard}
            onChange={handleInputChange}
          />
          <label>Collector ID:</label>
          <input
            type="text"
            placeholder="Id"
            name="collectorId"
            value={notification?.collectorId}
            onChange={handleInputChange}
          />

          <div className="--my">
            <button type="submit" className="--btn --btn-primary">
              Notify
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};
export default NotifyForm;
