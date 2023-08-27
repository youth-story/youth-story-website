import React from 'react';
import './css/About.css';
import UserProgressBar from '../components/AboutUs/UserProgressBar';
import Header from '../components/AboutUs/Header';
import Timeline from '../components/AboutUs/Timeline';
import Video from '../components/AboutUs/Video';
import Team from '../components/AboutUs/Team';

export default function About() {

    return(
        <div className='about-container'>
            <Header />
            <UserProgressBar />
            <br />
            <Video />
            <Timeline />
            <Team />
        </div>
    );

}