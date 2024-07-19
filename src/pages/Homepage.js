import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './Home';

const Homepage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      navigate('/mynotes');
    }
  }, [token, navigate]);

  return token ? null : <Home />;
};

export default Homepage;