import React from "react";
import "./css/SuccessPage.css";

const SuccessPage = () => {
  return (
    <div className="success-page">
      <div className="success-icon">🎉</div>
      <h1 className="success-header">Congratulations!</h1>
      <p className="success-message">
        Your order has been successfully placed. Thank you for your business!
      </p>
      <a href="/"><button>Click to go Back</button></a>
    </div>
  );
};

export default SuccessPage;
