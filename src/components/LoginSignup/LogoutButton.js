import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token from local storage or cookies
    localStorage.removeItem('token');

    // Redirect to the login page
    navigate('/sign-up');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
