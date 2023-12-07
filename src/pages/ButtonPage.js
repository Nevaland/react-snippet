import React from 'react';
import RoundedButton from '../components/RoundedButton';

const ButtonPage = () => {
  const handleClick = () => {
    alert('Button Clicked!');
  };

  return (
    <div>
      <h1>Button Page</h1>
      <RoundedButton label="Button A" onClick={handleClick} />
    </div>
  );
};

export default ButtonPage;