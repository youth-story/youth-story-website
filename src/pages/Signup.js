import React, {useEffect, useState} from 'react';
import SignupForm from '../components/LoginSignup/SignupForm';
import './css/Signup.css';
import { useNavigate } from 'react-router';
import {gapi} from 'gapi-script';
import {clientId} from '../utils/index';

export default function Signup({type}) {

    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        name: '',
        otp: null,
    });
    const [errorMessage, setErrorMessage] = useState({
        username: '',
        email: '',
        password: '',
        name: '',
        otp: '',
    });

    const updateErrorMessage = (name, value) => {
        setErrorMessage(prevData => ({
          ...prevData,
          [name]: value,
        }));
      };

    useEffect(()=> {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        };

        gapi.load('client:auth2', start);
    });

    return(
        <div className='container-signup'>
            <SignupForm data={data} setData={setData} errorMessage={errorMessage} setErrorMessage={setErrorMessage} updateErrorMessage={updateErrorMessage} />   
        </div>
    );

}