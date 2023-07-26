import React, {useState, useEffect} from 'react';
import Form from './Form';
import './SignupForm.css';
import { useNavigate } from 'react-router';
import api, { setAuthToken } from '../../services/api';
import axios from 'axios';
import {baseUrl} from '../../utils/index';

export default function LoginForm({data, setData, errorMessage, setErrorMessage, updateErrorMessage}) {

    const [detailsSubmitted, setDetailsSubmitted] = useState(false);
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    
    const isValid = (name, value) => {
        if (name === 'name')
        {
            const nameRegex = /^[a-zA-Z\s\-']+$/;
            return nameRegex.test(value);
        }
        else if (name === 'email')
        {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailRegex.test(value);
        }
    };

    const dataValidated = (data) => {

        if (data.email.replace(/\s/g, '').length === 0)
        {
            updateErrorMessage('email', '*This is a required field');
            return false;
        }

        if (data.password.replace(/\s/g, '').length === 0)
        {
            updateErrorMessage('password', '*This is a required field');
            return false;
        }

        return true;

    }

    const changeValue = (e) => {
        const {name, value} = e.target;

        updateErrorMessage(name, '');

        setData((prevData) => ({
            ...prevData,
            [name]: value,
          }));

    }

    const submitLoginForm = async (e) => {

      e.preventDefault();

      if (!dataValidated(data)) return;
    
      try {

        const response = await axios.post(`${baseUrl}/api/auth/login`, {
          email: data.email,
          password: data.password,
          rememberMe: data.rememberMe
        });
    
        const { token } = response.data;
    
        // Set the JWT token in the request headers
        setAuthToken(token);
    
        // Store the JWT token in local storage or cookies
        localStorage.setItem('token', token);
    
        // Redirect the user to the protected route or dashboard
        navigate('/success-stories');
      } catch (err) {
        // Handle login error
        setMessage('Invalid email or password');
      }
    };
    

    const handleCheckboxChange = (e) => {
      setData((prevData) => ({
        ...prevData,
        'rememberMe': !data.rememberMe,
      }));
      };

    return(
        <div className='container'>
      {!detailsSubmitted ? <h1 className='heading'>Login</h1> : <h1 className='heading'>Enter OTP</h1>}
      <div className='form-container'>
      <p style={{justifyContent: 'center', color: 'red', fontWeight: 'bold'}}>{message}</p>
        <Form
          type='login'
          data={data}
          setData={setData}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          updateErrorMessage={updateErrorMessage}
          changeValue={changeValue}
          detailsSubmitted={detailsSubmitted}
          setDetailsSubmitted={setDetailsSubmitted}
          dataValidated={dataValidated}
          submitLoginForm={submitLoginForm}
        />
      </div>
      <div className='switch-page-container'>
      <label style={{color: 'white'}}>
        <input type="checkbox" checked={data.rememberMe} onChange={handleCheckboxChange} />
        Remember me
      </label>
        <p className='switch-page'>Forgot Password?</p>
      </div>
      <p className='switch-page'>New User? <a onClick={(e)=>{e.preventDefault();navigate('/sign-up')}} href='/sign-up' style={{ textDecoration: 'none', color: 'white' }}>Sign Up</a></p>
    </div>
    );

}