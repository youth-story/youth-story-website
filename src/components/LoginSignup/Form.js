import React, {useState, useEffect} from 'react';
import InputForm from '../InputForm';
import './SignupForm.css';

export default function Form({type, data, setData, errorMessage, setErrorMessage, updateErrorMessage, changeValue, setDetailsSubmitted, detailsSubmitted, changeOTP, submitSignupForm, dataValidated}) {

    const changeForm = (e) => {
        e.preventDefault();

        if (!dataValidated(data))
            return;

        if (type === 'login')
        {
            alert('LoggedIn');
            return;
        }
        
        localStorage.setItem('fields', 'submitted');
        setDetailsSubmitted(true);
    }

    const resetInfo = () => {
        localStorage.removeItem('fields');
        setDetailsSubmitted(false);
    }

    useEffect(() => {
        const storedFields = localStorage.getItem('fields');
        if (storedFields) {
          setDetailsSubmitted(true);
        }
      }, []);

    if (detailsSubmitted)
    {
        return (
            <>
             <form onSubmit={submitSignupForm} className='container-login-signup' style={{alignItems: 'center', height: 'fit-content'}}> 
                <InputForm type='numeric'
                            name='otp'
                            value={data.otp}
                            Change={changeOTP}
                            placeholder='OTP'
                            errorMessage={errorMessage.otp} />
                <button className='submit' style={{marginBottom: '12px'}} onClick={submitSignupForm}>Sign Up</button>
            </form>
            <button className='submit' style={{backgroundColor: 'red', color: 'white'}} onClick={resetInfo}>Reset Details</button>
            </>
        );
    }

    return (
        <>
        <form onSubmit={changeForm} className='container-login-signup' style={{alignItems: 'center', height: 'fit-content'}}>
            {type === 'sign-up' ? 
                <div>
                    <InputForm
                        type='text'
                        name='name'
                        value={data.name}
                        Change={changeValue}
                        placeholder='Name'
                        errorMessage={errorMessage.name}
                    />
                    <InputForm
                        type='text'
                        name='username'
                        value={data.username}
                        Change={changeValue}
                        placeholder='Username'
                        errorMessage={errorMessage.username}
                    />
                </div>
                : null}
                <div>
                <InputForm
                    type='email'
                    name='email'
                    value={data.email}
                    Change={changeValue}
                    placeholder='Email'
                    errorMessage={errorMessage.email}
                />
                <InputForm
                    type='password'
                    name='password'
                    value={data.password}
                    Change={changeValue}
                    placeholder='Password'
                    errorMessage={errorMessage.password}
                />
                </div>
            <button type='submit' className='submit'>{type === 'sign-up' ? 'Next' : 'Login'}</button>
        </form>
        </>
    );

}