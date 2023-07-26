import React, { useState, useEffect } from 'react';
import InputForm from '../InputForm';
import axios from 'axios';
import './SignupForm.css';
import {baseUrl} from '../../utils/index';

export default function Form({
  type,
  data,
  setData,
  errorMessage,
  setMessage,
  setErrorMessage,
  updateErrorMessage,
  changeValue,
  setDetailsSubmitted,
  detailsSubmitted,
  changeOTP,
  submitSignupForm,
  dataValidated,
  submitLoginForm,
}) {
  const [otpMessage, updateOtpMessage] = useState('');

  const changeForm = async (e) => {
    e.preventDefault();

    if (!dataValidated(data)) return;

    try {
      const response = await axios.post(
        `${baseUrl}/api/auth/request-otp`,
        {
          email: data.email,
          username: data.username,
        }
      );
      const dataLocal = {
        email: data.email,
        name: data.name,
        password: data.password,
        username: data.username,
      };
      sessionStorage.setItem('dataLocal', JSON.stringify(dataLocal));
      setDetailsSubmitted(true);
      setMessage('');
      alert('OTP sent! Each OTP is valid for 5 minutes');
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.error);
    }
  };

  const submitOTPform = async (e) => {
    e.preventDefault();

    console.log('hello');
    if (data.otp == null || data.otp.toString().replace(/\s/g, '').length !== 6) {
      updateErrorMessage('otp', '*Invalid OTP');
      return;
    }
  
    try {
      console.log('trying');
      const response = await axios.post(`${baseUrl}/api/auth/verify-otp`, {
        email: data.email,
        otp: data.otp,
      });
      console.log('Response is ', response.data);
      submitSignupForm(e);
    } catch (error) {
      console.error(error.response.data.error);
      updateErrorMessage('otp', `*${error.response.data.error}`);
    }
  };  

  const resetInfo = () => {
    sessionStorage.removeItem('dataLocal');
    setDetailsSubmitted(false);
  };

  useEffect(() => {
    const storedFields = JSON.parse(sessionStorage.getItem('dataLocal'));
    if (storedFields) {
      setData({
        email: storedFields.email,
        name: storedFields.name,
        password: storedFields.password,
        username: storedFields.username,
      });
      setDetailsSubmitted(true);
      updateErrorMessage('otp', '');
    }
  }, []);

  return (
    <>
      {detailsSubmitted ? (
        <>
        <div style={{justifyContent: 'flex-start',
              alignItems: 'flex-start'}}>
            <h1
                style={{
                color: 'green',
                fontWeight: 'bold',
                }}
            >
                {otpMessage}
            </h1>
          </div>
          <form
            onSubmit={submitOTPform}
            className="container-login-signup"
            style={{ alignItems: 'center', height: 'fit-content' }}
          >
            <InputForm
              type="text"
              name="otp"
              value={data.otp}
              Change={changeOTP}
              placeholder="Enter OTP"
              errorMessage={errorMessage.otp}
            />
            <button className="submit" style={{ marginBottom: '12px' }} onClick={(e)=>{sessionStorage.clear();submitOTPform(e);}}>
              Sign Up
            </button>
          </form>
          <button className="submit" style={{ backgroundColor: 'red', color: 'white' }} onClick={resetInfo}>
            Back to details
          </button>
        </>
      ) : (
        <>
          <form
            onSubmit={(event) => {type === 'sign-up' ? submitSignupForm(event) : submitLoginForm(event)}}
            className="container-login-signup"
            style={{ alignItems: 'center', height: 'fit-content' }}
          >
            {type === 'sign-up' ? (
              <div>
                <InputForm
                  type="text"
                  name="name"
                  value={data.name}
                  Change={changeValue}
                  placeholder="Name"
                  errorMessage={errorMessage.name}
                />
                <InputForm
                  type="text"
                  name="username"
                  value={data.username}
                  Change={changeValue}
                  placeholder="Username"
                  errorMessage={errorMessage.username}
                />
              </div>
            ) : null}
            <div>
              <InputForm
                type="email"
                name="email"
                value={data.email}
                Change={changeValue}
                placeholder="Email"
                errorMessage={errorMessage.email}
              />
              <InputForm
                type="password"
                name="password"
                value={data.password}
                Change={changeValue}
                placeholder="Password"
                errorMessage={errorMessage.password}
              />
            </div>
            <button type="submit" className="submit">
              {type === 'sign-up' ? 'SignUp' : 'Login'}
            </button>
          </form>
        </>
      )}
    </>
  );
}
