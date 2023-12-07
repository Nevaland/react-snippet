const API_URL = 'http://localhost:5000';

const apiService = {
  fetchData: async () => {
    try {
      const response = await fetch(`${API_URL}/data`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data;

    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },
};

export default apiService;