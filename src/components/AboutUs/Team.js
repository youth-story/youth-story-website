import React from 'react';
import './Team.css';
import Profile from './Profile';

export default function Team() {
  return (
    <div className='team-container'>
      <h1>Backed by the Best</h1>
      <h4><span style={{color: 'red'}}>D2D</span> is backed and supported by <bold>3+</bold> Angel Investors</h4>
      <br />
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem'}}>
        <Profile role='Co-founder, CEO' name='Harsh Rajput' pic='https://media.licdn.com/dms/image/D4D03AQHKV5wmnWzxKA/profile-displayphoto-shrink_800_800/0/1690511271943?e=1698278400&v=beta&t=njY49oHvPTsB2Z5dlpPwvDGP-KWKnD-MiB8j3byQcD8' linkedIn='https://www.linkedin.com/in/harshrajput-/?originalSubdomain=in' />
        <Profile role='Co-founder, CTO' name='Aviral Dewan' pic='https://media.licdn.com/dms/image/D4D03AQG3lFT1jg8uYw/profile-displayphoto-shrink_800_800/0/1681595554033?e=1698278400&v=beta&t=Ui_xINPZGzQJRMT8eDcwWQP3CieULsn13GAzLRApazk' linkedIn='https://www.linkedin.com/in/aviraldewan/' />
        <Profile role='Co-founder, COO' name='Shreyas Chandra' pic='https://media.licdn.com/dms/image/D4D03AQE_-O7S_sHQ0w/profile-displayphoto-shrink_800_800/0/1672846926841?e=1698278400&v=beta&t=VpydelZDNQA8gFeRyhGbB2BO4Xop2Smbp6M7CPv6bNg' linkedIn='https://www.linkedin.com/in/shreyas-b-chandra-32a786237/' />
        </div>
    </div>
  );
}
