import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { clientId, clientIdLinkedin, baseUrl } from '../../utils/index';
import './Social.css';

const Social = () => {

  const successSignUp = (res) => {
    console.log('Google login success', res.profileObj);
  };

  const failureSignUp = () => {
    console.log('Google login failure');
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
