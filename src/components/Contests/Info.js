import React from 'react';
import './Info.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { contest } from '../../dummy/contest';

const Info = () => {
  const processedDesc = contest.desc.replace(/(\S{10})/g, '$1&shy;');

  return (
    <div className='info-container'>
      <span className='info-title-container'>
        <h1 className='info-title'>{contest.title}</h1>
        <p className='info-subTitle'> - {contest.subTitle}</p>
      </span>
      <span className='info-register'>
        <h3 className='info-participants'>Participants registered: {contest.participants}</h3>
        <Button
          variant='contained'
          size='large'
          disabled
          style={{ backgroundColor: '#ccc', borderRadius: '10px' }}
        >
          Register
        </Button>
      </span>
      <span className='info-contest-description'>
        <p dangerouslySetInnerHTML={{ __html: processedDesc }}></p>
      </span>
    </div>
  );
};

export default Info;