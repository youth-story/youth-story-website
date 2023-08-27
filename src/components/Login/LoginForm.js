import React, {useState, useEffect} from 'react';
import './LoginForm.css';
import { isEmail } from 'validator';
import { useNavigate, Link } from 'react-router-dom';
import api, { setAuthToken } from '../../services/api';
import axios from 'axios';
import Card from './Card';
import Header from './Header';
import Form from './Form';
import Social from './Social';
import {baseUrl} from '../../utils/index';

export default function LoginForm({ data, setData, errorMessage, setErrorMessage, updateErrorMessage}) {

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
            return isEmail(value);
        }
        else if (name === 'password' && value.replace(/\s/g, '').length < 8 && value.replace(/\s/g, '').length > 0)
        {
            return false;
        }

        return true;
    };

    const handleLinkClick = (event) => {
        event.preventDefault();
        navigate('/login');
      };

    const dataValidated = (data) => {

        if (data.name.replace(/\s/g, '').length === 0)
        {
            updateErrorMessage('name', '*This is a required field');
            return false;
        } 
        else if (data.username.replace(/\s/g, '').length === 0)
        {
            updateErrorMessage('username', '*This is a required field');
            return false;
        }
        else if (data.email.replace(/\s/g, '').length === 0)
        {
            updateErrorMessage('email', '*This is a required field');
            return false;
        }
        else if (data.password.replace(/\s/g, '').length === 0)
        {
            updateErrorMessage('password', '*This is a required field');
            return false;
        }
        

        return true;

    }

    const changeValue = (name, value) => {
      
        if (name === 'username') {
          if (value.replace(/\s/g, '').length > 0 && value.includes(' ')) {
            updateErrorMessage('username', '*Spaces are not allowed');
            return;
          }
          else if (value.replace(/\s/g, '').length > 30)
          {
            updateErrorMessage('username', '*Max length is 30');
            return;
          }
        } 
      
        let inputValue = value;
        if (name === 'name')
          inputValue = value.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());
        setData((prevData) => ({
          ...prevData,
          [name]: inputValue,
        }));
      
        if (value.replace(/\s/g, '').length === 0 || isValid(name, value)) {
          updateErrorMessage(name, '');
        }
      };      
      
    const changeOTP = (e) => {
        const {name, value} = e.target;
           setData((prevData) => ({
            ...prevData,
            [name]: value.replace(/[^0-9]/g, ''),
          }));
    }

    const submitLoginForm = async (e) => {
      // e.preventDefault();
     
        setDetailsSubmitted(false);

        if (!data.username || !data.password)
        {
          setMessage('Please enter all details');
          return;
        }

      try {

        const response = await axios.post(`${baseUrl}/api/auth/login`, {
          email: data.email,
          name: data.name,
          password: data.password,
          username: data.username,
          mode: 0,
        });
        setData({
          email: '',
          name: '',
          password: '',
          username: '',
          mode: 0,
        });
    
        const { token } = response.data;
    
        // Set the JWT token in the request headers
        setAuthToken(token);
    
        // Store the JWT token in local storage or cookies
        localStorage.setItem('token', token);
    
        // Redirect the user to the protected route or dashboard
        navigate('/');
      } catch (err) {
        // Handle login error
        setMessage('An error occured, please enter correct details or try again later');
      }
    }

    return(
        <div className='loginform-container'>
          <Card>
             <Header />
             <Form data={data} message={message} changeValue={changeValue} errorMessage={errorMessage} submitLoginForm={submitLoginForm} />
             <div className="or-sign-up-with">
              <div className="line"></div>
              <div className="or-text">or continue with</div>
              <div className="line"></div>
            </div>
             <Social setData={setData} setMessage={setMessage} />
             <div className="account-container">
              <div className="account">Don't have an account? <Link style={{color: 'red', textDecoration: 'none', fontWeight: '700'}} to='/sign-up'>Sign up</Link></div>
            </div>
          </Card>
        </div>
    );

}