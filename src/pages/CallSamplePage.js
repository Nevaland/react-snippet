import React from 'react';
import DataDisplay from '../components/DataDisplay';
import UpdatingDataDisplay from '../components/UpdatingDataDisplay';


const CallSamplePage = () => {
  return (
    <div>
      <h1>Call Sample Page</h1>
      <p>API Calling</p>
      <DataDisplay />
      <p>API Repeated Calling</p>
      <UpdatingDataDisplay />
    </div>
  );
};

export default CallSamplePage;