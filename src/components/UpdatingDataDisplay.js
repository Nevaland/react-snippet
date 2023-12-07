import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';

const UpdatingDataDisplay = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const result = await apiService.fetchData();
      setData(result);
    } catch (error) {
      // Handle error
    }
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Updating Data Display Component</h2>
      {data ? (
        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UpdatingDataDisplay;