import React from 'react';
import './Winner.css';

const Winner = ({winner, index}) => {
    return (
        <div className='winner'>
            {index+1}.<img src='https://img.freepik.com/premium-vector/vector-abstract-tech-sci-fi-frame-template-book-cover-poster-flyerx9xdxa_178863-44.jpg' alt='user image' className='user-image' />
            <span style={{fontSize: '1.3rem'}}>{winner}</span>
        </div>
    );
}

export default Winner;