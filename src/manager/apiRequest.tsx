import axios from 'axios';

// Define your API base URL and API key
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '31766578fe944a8198575afe53a66dec';

// Generic API request handler
const apiRequest = async (
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  params: Record<string, any> = {},
  data: object = {}
): Promise<any> => {
  try {
    // Ensure API key is included in the params for GET requests
    const fullParams = { ...params, api_key: API_KEY };

    const response = await axios({
      method,
      url: `${BASE_URL}${endpoint}`,
      params: method === 'GET' ? fullParams : undefined, // Use params for GET requests
      data: method !== 'GET' ? data : undefined, // Use data for non-GET requests
    });

    console.log('API Response:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('API Request Error:', error.message);
    console.error('Error details:', error.response?.data || error);
    throw error;
  }
};

export default apiRequest;
