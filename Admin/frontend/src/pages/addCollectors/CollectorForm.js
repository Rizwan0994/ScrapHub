import { useForm } from "react-hook-form";
import React, { useState, useEffect } from 'react';
import CollectorList from "./CollectorList";



const CollectorForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [notification, setNotification] = useState('');

    useEffect(() => {
        if (notification) {
          window.alert(notification);
        }
      }, [notification]);
      

    const onSubmit = (data) => {
      fetch('http://localhost:5000/api/collectors/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setNotification('Data saved successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
        setNotification('Error!');
      });
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          placeholder="Enter name"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <div className="invalid-feedback">Name is required</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="contact">Contact</label>
        <input
          type="tel"
          className={`form-control ${errors.contact ? "is-invalid" : ""}`}
          placeholder="Enter contact"
          {...register("contact", {
            required: true,
            pattern: /^\d{10}$/,
          })}
        />
        {errors.contact && errors.contact.type === "required" && (
          <div className="invalid-feedback">Contact is required</div>
        )}
        {errors.contact && errors.contact.type === "pattern" && (
          <div className="invalid-feedback">Invalid contact format</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          className={`form-control ${errors.address ? "is-invalid" : ""}`}
          placeholder="Enter address"
          {...register("address", { required: true })}
        />
        {errors.address && (
          <div className="invalid-feedback">Address is required</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="text"
          className={`form-control ${errors.address ? "is-invalid" : ""}`}
          placeholder="Enter Password"
          {...register("password", { required: true })}
        />
        {errors.address && (
          <div className="invalid-feedback">Address is required</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="pickupArea">Pickup Area</label>
        <select
          className={`form-control ${errors.pickupArea ? "is-invalid" : ""}`}
          {...register("pickupArea", { required: true })}
        >
          <option value="">Select pickup area</option>
          <option value="FaisalabadSH1">FaisalabadSH1</option>
          <option value="FaisalabadSH2">FaisalabadSH2</option>
          <option value="FaisalabadSH3">FaisalabadSH3</option>
        </select>
        {errors.pickupArea && (
          <div className="invalid-feedback">Pickup area is required</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          placeholder="Enter email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && errors.email.type === "required" && (
          <div className="invalid-feedback">Email is required</div>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <div className="invalid-feedback">Invalid email format</div>
        )}
      </div>
      {/* <div className="form-group">
        <label htmlFor="color">Color</label>
        <HexColorPicker color={color} onChange={setColor} />
      </div> */}
      <button type="submit" className="btn btn-primary">
    Add Collector
  </button>
  <button type="submit" className="btn btn-primary">
    {<CollectorList/>}
  </button>
</form>
);
};

export default CollectorForm;