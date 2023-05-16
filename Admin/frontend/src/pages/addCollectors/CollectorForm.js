import { useForm } from "react-hook-form";
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";



const CollectorForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [notification, setNotification] = useState('');
    const navigate = useNavigate();

    function handleClick() {
      navigate("/collector-list");
    }
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
  className={`form-control`}
  placeholder="Enter name"
  {...register("name", { pattern: /^[a-zA-Z0-9\s]+$/ })}
required/>

      {errors.name && (
        <div className="invalid-feedback"><h4>invaid input</h4></div>
      )}
    </div>
    <div className="form-group">
      <label htmlFor="contact">Contact</label>
      <input
        type="tel"
        className={`form-control`}
        placeholder="Enter contact"
        {...register("contact", {
          pattern: /^\d{11}$/,
        })}
        required/>
      {errors.contact && errors.contact.type === "required" && (
        <div className="invalid-feedback"><h4>Contact is required</h4></div>
      )}
      {errors.contact && errors.contact.type === "pattern" && (
        <div className="invalid-feedback"><h4>Invalid contact format</h4></div>
      )}
    </div>
    <div className="form-group">
      <label htmlFor="address">Address</label>
      <input
        type="text"
        className={`form-control`}
        placeholder="Enter address"
        {...register("address")}
        required/>
      {errors.address && (
        <div className="invalid-feedback"><h4>Address is required</h4></div>
      )}
    </div>
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input
  type="password"
  className={`form-control`}
  placeholder="Enter Password"
  {...register("password", { required: true, minLength: 8 })}
/>
{errors.password && (
  <div className="invalid-feedback">
    <h4>Password must be at least 8 characters long</h4>
  </div>
)}

    </div>
    <div className="form-group">
      <label htmlFor="pickupArea">Pickup Area</label>
      <select
        className={`form-control`}
        {...register("pickupArea", { required: true })}
      >
        <option value="">Select pickup area</option>
        <option value="FaisalabadSH1">FaisalabadSH1</option>
        <option value="FaisalabadSH2">FaisalabadSH2</option>
        <option value="FaisalabadSH3">FaisalabadSH3</option>
      </select>
      {errors.pickupArea && (
        <div className="invalid-feedback"><h4>Pickup area is required</h4></div>
      )}
    </div>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        className={`form-control`}
        placeholder="Enter email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && errors.email.type === "required" && (
        <div className="invalid-feedback"><h4>Email is required</h4></div>
      )}
      {errors.email && errors.email.type === "pattern" && (
        <div className="invalid-feedback"><h4>Invalid email format</h4></div>
      )}
    </div>
    <button type="submit" style={{
    padding: "10px",
    marginLeft:"5px",
    background: "#0069d9",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.2s"
  }}>
      Add Collector
    </button>
    
    <button 
  onClick={handleClick} 
  style={{
    padding: "10px",
    marginLeft:"5px",
    background: "#0069d9",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.2s"
  }}
>
  Go to Collector List
</button>
  </form>
  
);
};

export default CollectorForm;