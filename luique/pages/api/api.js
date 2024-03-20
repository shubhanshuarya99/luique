
const fetchDataFromAPI = async () => {
    try {
      const userId = '65b3a22c01d900e96c4219ae';
      const apiUrl = `https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${userId}`;
  
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error('Failed to fetch data from the API');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  
  export default fetchDataFromAPI;
  