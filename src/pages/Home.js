import React, { useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import {homeInfo} from '../constants/pageInformation';
import HeaderBackDrop from '../components/HeaderBackDrop';
import MagazineCover from '../components/Magazine/MagazineCover';

export default function Home() {

    const navigate = useNavigate();

    useEffect(()=>{
        navigate('/success-stories');
    },[]);

    return (
        <>
        </>
    );

}