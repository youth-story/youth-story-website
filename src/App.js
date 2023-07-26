import React, { useState, useEffect } from 'react';
import MyRoutes from './MyRoutes';
import { useNavigate, useLocation } from 'react-router';
import jwt_decode from 'jwt-decode';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [tokenExpired, setTokenExpired] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      if (location.pathname != '/login' && location.pathname != '/sign-up')
        navigate('/sign-up');
      else if (location.pathname == '/login')
        navigate('/login')
      else 
        navigate('/sign-up')
    } else {
      const decodedToken = jwt_decode(token);
      const currentTime = Date.now() / 1000; // Get current time in seconds

      if (decodedToken.exp < currentTime) {

        if (location.pathname != '/login' && location.pathname != '/sign-up')
          navigate('/login');
        else if (location.pathname == '/sign-up')
          navigate('/sign-up');
        else
          navigate('/login');
       
      } else if (location.pathname === '/login' || location.pathname === '/sign-up') {
        navigate('/success-stories');
      }
    }
  }, [navigate, location.pathname]);

  return <MyRoutes tokenExpired={tokenExpired} />;
}
