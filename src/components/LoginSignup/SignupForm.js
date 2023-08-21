import React, {useState, useEffect} from 'react';
import './SignupForm.css';
import { isEmail } from 'validator';
import { useNavigate, Link } from 'react-router-dom';
import api, { setAuthToken } from '../../services/api';
import axios from 'axios';
import Card from './Card';
import Header from './Header';
import Form from './Form';
import Social from './Social';
import {baseUrl} from '../../utils/index';

export default function SignupForm({ data, setData, errorMessage, setErrorMessage, updateErrorMessage}) {

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
      if ((name === 'name' && value.replace(/\s/g, '').length > 50) || (name === 'username' && value.replace(/\s/g, '').length > 30)) {
        let len = 30;
        if (name === 'name') len = 50;
        updateErrorMessage(name, `*Max limit ${len} characters`);
        return;
      }
    
      if (name === 'name') {
        if (value.replace(/\s/g, '').length > 50) {
          updateErrorMessage('name', '*Max limit 50 characters');
          return;
        } else if (value.replace(/\s/g, '').length > 1 && !isValid('name', value)) {
          updateErrorMessage('name', '*Only A-Z and a-z characters allowed');
          return;
        } else if (value.split(" ").length > 2) {
          updateErrorMessage('name', '*Only First and Last name allowed');
          return;
        }
      } else if (name === 'username') {
        if (value.replace(/\s/g, '').length > 0 && value.includes(' ')) {
          updateErrorMessage('username', '*Spaces are not allowed');
          return;
        } else if (value.replace(/\s/g, '').length > 30) {
          updateErrorMessage('username', '*Max length is 30');
          return;
        }
      } else if (name === 'email') {
        if (value.replace(/\s/g, '').length > 0) {
          if (!isValid('email', value)) {
            updateErrorMessage('email', '*Enter a valid email');
          } else {
            updateErrorMessage('email', ''); 
          }
        } else if (value.replace(/\s/g, '').length > 100) {
          updateErrorMessage('email', '*Max length is 100');
          return;
        } else {
          updateErrorMessage('email', ''); 
        }
      } else if (name === 'password') {
        const trimmedValue = value.replace(/\s/g, '');
        if (value.includes(' ')) {
          updateErrorMessage('password', '*Spaces are not allowed');
          return;
        }
        if (trimmedValue.length > 0 && trimmedValue.length < 8) {
          updateErrorMessage('password', '*Must include at least 8 characters');
        }
      }
    
      // Additional logic for specific fields can be added here
    
      let inputValue = value;
      if (name === 'name') {
        inputValue = value.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());
      }
      
      if (value.replace(/\s/g, '').length === 0 || isValid(name, value)) {
        updateErrorMessage(name, '');
      }
    
      setData((prevData) => ({
        ...prevData,
        [name]: inputValue,
      }));
    };      
      
    const changeOTP = (e) => {
        const {name, value} = e.target;
           setData((prevData) => ({
            ...prevData,
            [name]: value.replace(/[^0-9]/g, ''),
          }));
    }

    const submitSignupForm = async (e) => {
      e.preventDefault();
     
        setDetailsSubmitted(false);

        if (!data.name || !data.email || !data.password || !data.username)
        {
          setMessage('Please enter all details');
          return;
        }

      try {

        const response = await axios.post(`${baseUrl}/api/auth/sign-up`, {
          email: data.email,
          name: data.name,
          password: data.password,
          username: data.username,
          mode: 0,
        });

        setData({
          username: '',
        email: '',
        password: '',
        name: '',
        otp: null,
        mode: 0,
        })
        
        // Redirect the user to the protected route or dashboard
        navigate('/login');
      } catch (err) {
        // Handle login error
        setMessage('An error occured, please enter correct details or try again later');
      }
    }

    return(
        <div className='signupform-container'>
          <Card>
             <Header />
             <Form data={data} message={message} changeValue={changeValue} errorMessage={errorMessage} submitSignupForm={submitSignupForm} />
             <div className="or-sign-up-with">
              <div className="line"></div>
              <div className="or-text">or sign up with</div>
              <div className="line"></div>
            </div>
             <Social setData={setData} setMessage={setMessage} />
             <div className="account-container">
              <div className="account">Already have an account? <Link style={{color: 'red', textDecoration: 'none', fontWeight: '700'}} to='/login'>Log in</Link></div>
            </div>
          </Card>
        </div>
    );

}