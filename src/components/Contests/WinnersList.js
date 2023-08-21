import React from 'react';
import './WinnersList.css';
import Winner from './Winner';

const WinnersList = ({winners}) => {
    return (
        <div className='winners-list'>
            <div className='winner-header'>
           <h2 style={{fontSize: '2rem'}}>Winners</h2>
           <div className='under-line'></div>
           </div>
           <div className='winners'>
            {
                winners.map((winner, index) => {
                    return <Winner key={index} index={index} winner={winner} />
                })
            }
            </div>
        </div>
    );
}

export default WinnersList;