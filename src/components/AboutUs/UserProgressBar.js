import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-progressbar';
import constants from '../../constants/constants';
import './UserProgress.css';
import axios from 'axios';
import { baseUrl } from '../../utils';

const UserProgressBar = () => {
  const [usersCount, setUsersCount] = useState(1000);
  const [totalUsers, setTotalUsers] = useState(10000);

  function roundToNextHigherPowerOfTen(number) {
    const orderOfMagnitude = Math.pow(10, Math.floor(Math.log10(number)) + 1);
    return Math.ceil(number / orderOfMagnitude) * orderOfMagnitude;
  }  

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/about/stats`);
        const usersCount = response.data.users; // Assuming you have a way to get the users count
        setUsersCount(usersCount);
    
        if (usersCount > totalUsers) {
          setTotalUsers(roundToNextHigherPowerOfTen(usersCount));
        }
    
      } catch (error) {
        setUsersCount(3000); // Default value in case of an error
      }
    };    

    fetchUserCount();
  }, []);

  return (
    <div className="user-count-container">
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
      <br />
      <p>
      <strong>{`${usersCount}`}</strong> out of <strong>{`${totalUsers}`}</strong> users.<br />
  {`We are offering a free subscription to the first `}
  <strong>{`${totalUsers}`}</strong>
  {` users!`}
</p>
    </div>
  );
};

export default UserProgressBar;
