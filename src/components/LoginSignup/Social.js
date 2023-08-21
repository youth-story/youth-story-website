import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { clientId, clientIdLinkedin, baseUrl } from '../../utils/index';
import './Social.css';
import axios from 'axios';
import { useNavigate } from 'react-router';
import api, { setAuthToken } from '../../services/api';

const Social = ({setData, setMessage}) => {

  const navigate = useNavigate();

  const successSignUp = async (res) => {
     
    setData({
      email: '',
      name: '',
      password: '',
      username: '',
      mode: 0,
    });

    try {

      const response = await axios.post(`${baseUrl}/api/auth/sign-up`, {
        email: res.profileObj.email,
        name: res.profileObj.name,
        password: -1,
        username: "-1",
        mode: 1,
      });
  
      // Redirect the user to the protected route or dashboard
      navigate('/login');
    } catch (err) {
      // Handle login error
      setMessage('An error occured, please try again later');
    }
  };

  const failureSignUp = () => {
    setMessage('Google login failure');
  };

  return (
    <div className='social-container'>

      <GoogleLogin
        className='google-button-container'
        clientId={clientId}
        onSuccess={successSignUp}
        onFailure={failureSignUp}
        buttonText=""
        cookiePolicy={'single_host_origin'}
        isSignedIn={false}
      >
        <span className='google-button-icon'>Sign Up with Google</span>
      </GoogleLogin>
    </div>
  );
};

export default Social;
