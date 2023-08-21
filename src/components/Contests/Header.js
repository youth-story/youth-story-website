import React from 'react';
import { contest } from '../../dummy/contest';
import './Header.css';
import WinnersList from './WinnersList';

const Header = () => {
    return (
        <div>
            <div className='header'>
                <img src={contest.image} alt='contest image' className='contest-image' />
                <WinnersList winners={contest.winners} />
            </div>
        </div>
    );
}

export default Header;