import React from 'react';
import './Announcement.css';
import { contest } from '../../dummy/contest';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const SmallAnnouncement = ({ announcement }) => {
  const processedDesc = announcement.text.replace(/(\S{10})/g, '$1&shy;');
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',  // Change to 'column'
        alignItems: 'flex-start', // Change to 'flex-start'
        width: '100%',            // Change to '100%'
      }}
    >
      <p
        style={{ margin: '0.7rem 0 0.7rem 0' }}
        dangerouslySetInnerHTML={{ __html: processedDesc }}
      ></p>
      <p style={{ margin: '0', fontWeight: 'bold' }}>{announcement.date}</p>
    </div>
  );
};

const Announcement = () => {
  return (
    <div className='announcement-container'>
      <div className='announcement-header'>
        <h2 style={{ fontSize: '2rem' }}>Announcement</h2>
        <div className='under-line'></div>
      </div>
      <div className='announcement-description'>
        <p style={{ fontSize: '1.3rem', margin: '0.6rem 0 0.6rem 0' }}>
          Welcome to our exciting Contest! We are thrilled to announce this
          amazing opportunity for all creative minds out there. Get ready to
          showcase your talent and win fantastic prizes.
        </p>
        <p
          style={{
            color: 'red',
            fontSize: '1.2rem',
            margin: '0 0 0.6rem 0',
            fontWeight: 'bold',
          }}
        >
          Important Announcement:
        </p>
        {contest.announcement.map((item, index) => {
          return <SmallAnnouncement key={index} announcement={item} />;
        })}
      </div>
    </div>
  );
};

export default Announcement;
