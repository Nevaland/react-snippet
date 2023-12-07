import React from 'react';
import './RoundedButton.css';

const RoundedButton = ({ label, onClick }) => {
  return (
    <button className="rounded-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default RoundedButton;