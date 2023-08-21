import React from 'react';
import './Prizes.css';
import { contest } from '../../dummy/contest';

const PositionPrize = ({ prize, index }) => {
  return (
    <div
      className='prizes'
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '70%',
        backgroundColor: '#ccc',
        borderRadius: '10px',
        margin: '0.8rem',
        padding: '0.7rem',
      }}
    >
      <h2>{index} Place:</h2>
      <ul>
        {prize.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

const Prizes = () => {
  return (
    <div className='prizes-container'>
      <div className='prizes-header'>
        <h2 style={{ fontSize: '2rem' }}>Prizes</h2>
        <div className='under-line'></div>
      </div>
      <div className='prizes-description'>
        <PositionPrize index='First' prize={contest.firstPrize} />
        <PositionPrize index='Second' prize={contest.secondPrize} />
        <PositionPrize index='Third' prize={contest.thirdPrize} />
      </div>
    </div>
  );
};

export default Prizes;
