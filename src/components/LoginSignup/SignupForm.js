import React, {useState, useEffect} from 'react';
import Form from './Form';
import './SignupForm.css';
import { isEmail } from 'validator';
import { useNavigate } from 'react-router-dom';

export default function SignupForm({ data, setData, errorMessage, setErrorMessage, updateErrorMessage}) {

    const [detailsSubmitted, setDetailsSubmitted] = useState(false);
    const navigate = useNavigate();
    
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

    const changeValue = (e) => {
        const { name, value } = e.target;
      
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
          }
          // BE: check if username is already taken
        } else if (name === 'email') {
          if (value.replace(/\s/g, '').length > 0) {
            if (!isValid('email', value)) {
              updateErrorMessage('email', '*Enter a valid email');
            } else {
              updateErrorMessage('email', ''); 
            }
          } else {
            updateErrorMessage('email', ''); 
          }
        } else if (name === 'password') {
          const trimmedValue = value.replace(/\s/g, '');
          if (trimmedValue.length > 0 && trimmedValue.length < 8) {
            updateErrorMessage('password', '*Must include at least 8 characters');
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
            [name]: value,
          }));
    }
    const submitSignupForm = () => {
        alert('Submitted');
    }

    return(
        <div className='container'>
            {!detailsSubmitted ? <h1 className='heading'>Sign Up</h1> : <h1 className='heading'>Enter OTP</h1>}
            <Form type='sign-up' data={data} setData={setData} errorMessage={errorMessage} setErrorMessage={setErrorMessage} updateErrorMessage={updateErrorMessage} changeValue={changeValue} detailsSubmitted={detailsSubmitted} setDetailsSubmitted={setDetailsSubmitted} changeOTP={changeOTP} submitSignupForm={submitSignupForm} dataValidated={dataValidated} />
           <p className='switch-page'>Already have an account? <a href='/login' onClick={handleLinkClick} style={{textDecoration: 'none', color: 'white'}}>Login</a></p>
        </div>
    );

}