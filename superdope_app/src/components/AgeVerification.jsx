import React, { useState } from 'react';
import '../styles/AgeVerification.css';

const AgeVerification = ({ onVerified }) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleNoClick = () => {
    setShowMessage(true);
  };

  return (
    <div className="age-verification-container">
      <div className="age-verification-box">
        <img src="https://raw.githubusercontent.com/YAZR007/superdope_website/main/RAINBOWLOGO-removebg-preview.png" alt="Logo" className="age-verification-logo" />
        <h1 className="age-verification-title">ARE YOU 18 OR OVER?</h1>
        <p className="gameplay">You must be 18 or over to enter this site.</p>
        <div className="age-verification-buttons">
          <button onClick={onVerified} className="age-verification-button">YES</button>
          <button onClick={handleNoClick} className="age-verification-button">NO</button>
        </div>
        {showMessage && <p className="age-verification-message gameplay">You must be 18 or over to enter.</p>}
      </div>
    </div>
  );
};

export default AgeVerification;
