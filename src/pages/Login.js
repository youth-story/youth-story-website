import React, {useEffect, useState} from 'react';
import LoginForm from '../components/Login/LoginForm';
import './css/Login.css';
import { useNavigate } from 'react-router';
import {gapi} from 'gapi-script';
import {clientId} from '../utils/index';

export default function Login({type}) {

    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        name: '',
        otp: null,
        mode: 0,
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
        <div className='container-login'>
            <LoginForm data={data} setData={setData} errorMessage={errorMessage} setErrorMessage={setErrorMessage} updateErrorMessage={updateErrorMessage} />   
        </div>
    );

}