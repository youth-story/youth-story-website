import React, { useState } from 'react';
import ProgressBar from 'react-progressbar';

const UserProgressBar = () => {
  const [usersCount, setUsersCount] = useState(1000);
  const totalUsers = 10000;

  const handleIncrement = () => {
    if (usersCount < totalUsers) {
      setUsersCount(usersCount + 1);
    }
  };

  return (
    <div className="app-container">
      <h1>User Progress</h1>
      <br />
      <ProgressBar
        completed={(usersCount / totalUsers) * 100}
        width="80vw" // Set the width of the progress bar
        height="3rem"
        transitionDuration="1s" // Add a transition effect
        transitionTimingFunction="linear" // Specify transition timing function
        baseBgColor="#f2f2f2" // Set the color of the unfilled portion to light grey
        bgColor="#4caf50" // Set the color of the filled portion to green
      />
      <p>{`${usersCount} out of ${totalUsers} users.`}<br /> {`We are offering free subscription to first 10,000 users!`}</p>
    </div>
  );
};

export default UserProgressBar;
