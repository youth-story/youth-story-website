import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import {aboutInfo} from '../constants/pageInformation';

export default function Sponsors() {

    return(
        <>
            <NavBar title={aboutInfo.title} info={aboutInfo.info} />
            <h1>Sponsors Page</h1>
            <ul>
                <Link to='/about'>About</Link>
            </ul>
        </>
    );

}