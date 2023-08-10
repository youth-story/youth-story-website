import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { clientId, clientIdLinkedin, baseUrl } from '../../utils/index';
import './Social.css';

const Social = () => {

  const successLogin = (res) => {
    console.log('Google login success', res.profileObj);
  };

  const failureLogin = () => {
    console.log('Google login failure');
  };

  return (
    <div className='social-container'>

      <GoogleLogin
        className='google-button-container'
        clientId={clientId}
        onSuccess={successLogin}
        onFailure={failureLogin}
        buttonText=""
        cookiePolicy={'single_host_origin'}
        isSignedIn={false}
      >
        <span className='google-button-icon'>Login with Google</span>
      </GoogleLogin>
    </div>
  );
};

export default Social;
