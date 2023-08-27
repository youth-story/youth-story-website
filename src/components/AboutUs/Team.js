import React from 'react';
import './Team.css';
import Profile from './Profile';
import Ashwath from './team_images/Ashwath.jpg';
import Shreyas from './team_images/Shreyas.jpg';
import Harsh from './team_images/Harsh.jpg';
import Aviral from './team_images/Aviral.jpg';
import Hari_Sir from './team_images/Hari_Sir.jpeg';
import Aditi from './team_images/Aditi.jpeg';
import Aditya from './team_images/Aditya.jpg';
import Alabhya from './team_images/Alabhya.jpg';
import Isha from './team_images/Isha.jpg';
import Kaustubh from './team_images/Kaustubh.jpg';
import Sakshi from './team_images/Sakshi.jpg';

export default function Team() {
  return (
    <div className='team-container'>
      <h1>Meet the team</h1>
      <p><span style={{color: 'red'}}>D2D</span> is backed and supported by organizations such as <strong>Incubation centre, IIT Patna</strong>, <strong>GeeksforGeeks</strong> and more</p>
      <br />
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem'}}>
        <Profile role='Founder and CEO' name='Harsh Rajput' pic={Harsh} linkedIn='https://www.linkedin.com/in/harshrajput-/?originalSubdomain=in' />
        <Profile role='Co-founder and CTO' name='Aviral Dewan' pic={Aviral} linkedIn='https://www.linkedin.com/in/aviraldewan/' />
        <Profile role='COO' name='Shreyas B Chandra' pic={Shreyas} linkedIn='https://www.linkedin.com/in/shreyas-b-chandra-32a786237/' />
        <Profile role='Editor in Chief' name='Aditi Shree' pic={Aditi} linkedIn='https://www.linkedin.com/in/aditi-shree-4220b3284/' />
        {/* <Profile role='Graphics Head' name='Ashwath Devarajan' pic={Ashwath} linkedIn='https://www.linkedin.com/in/ashwathdev/?originalSubdomain=in' /> */}
        <Profile role='Board Member' name='Mr. Hari P Chaurasia' pic={Hari_Sir} linkedIn='https://www.linkedin.com/company/youthstory-india/' />
        <Profile role='Editor' name='Alabhya Raj' pic={Alabhya} linkedIn='https://www.linkedin.com/in/alabhya-raj-0bb3a9284/' />
        <Profile role='Editor' name='Sakshi Shewale' pic={Sakshi} linkedIn='https://www.linkedin.com/in/sakshi-shewale-882452215/' />
        <Profile role='Editor' name='Aditya Pratap Rai' pic={Aditya} linkedIn='https://www.linkedin.com/in/adityaprataprai0717/' />
        <Profile role='Editor' name='Kaustubh Raj' pic={Kaustubh} linkedIn='https://www.linkedin.com/in/kaustubh-raj-090931232/' />
        <Profile role='Editor' name='Isha Roy' pic={Isha} linkedIn='https://www.linkedin.com/in/isha-roy-824627201/' />
        </div>
    </div>
  );
}
