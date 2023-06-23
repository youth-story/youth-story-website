import React, { useState } from 'react';
import MyRoutes from './MyRoutes';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState('session-expired');

  return (
    <MyRoutes isLoggedIn={isLoggedIn} />
  );
}
