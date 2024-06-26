import axios from 'axios';

const validateToken = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return { valid: false };
  }

  try {
    const response = await axios.get('/api/auth/validate-token', {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Token validation error:', error);
    return { valid: false };
  }
};

export default validateToken;
