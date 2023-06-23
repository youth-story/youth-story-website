import React, {useState, useEffect} from 'react';
import Form from './Form';
import './SignupForm.css';
import { useNavigate } from 'react-router';

export default function LoginForm({data, setData, errorMessage, setErrorMessage, updateErrorMessage}) {

    const [detailsSubmitted, setDetailsSubmitted] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();
    
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

        if (data.name.replace(/\s/g, '').length === 0)
        {
            updateErrorMessage('name', '*This is a required field');
            return false;
        }

        // if (data.password.replace(/\s/g, '').length < 8)
        // {
        //     updateErrorMessage('password', 'Must include atleast 8 characters');
        //     return false;
        // }

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

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
      };

    return(
        <div className='container'>
      {!detailsSubmitted ? <h1 className='heading'>Login</h1> : <h1 className='heading'>Enter OTP</h1>}
      <div className='form-container'>
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
          changeOTP={changeOTP}
          submitSignupForm={submitSignupForm}
          dataValidated={dataValidated}
        />
      </div>
      <div className='switch-page-container'>
      <label style={{color: 'white'}}>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        Remember me
      </label>
        <p className='switch-page'>Forgot Password?</p>
      </div>
      <p className='switch-page'>New User? <a onClick={(e)=>{e.preventDefault();navigate('/sign-up')}} href='/sign-up' style={{ textDecoration: 'none', color: 'white' }}>Sign Up</a></p>
    </div>
    );

}