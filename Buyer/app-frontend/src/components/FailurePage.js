import React from 'react';
import './css/failure-page.css';

const FailurePage = ({ message }) => {
  return (
    <div className="failure-page-container">
      <div className="failure-emoji">&#x1F614;</div>
      <h2 className="failure-message">{message}</h2>
      <p className="failure-instruction">Please try again their is something wrong!</p>
    </div>
  );
};

export default FailurePage;
