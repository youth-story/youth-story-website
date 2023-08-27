import React, {useState, useEffect} from 'react';
import ContestList from '../components/Contests/ContestList';
import { ongoing, upComing, completed } from '../dummy/contests';
import './css/Contests.css';

const Contests = () => {

    const [contests, setContests] = useState({
        ongoing: ongoing,
        upComing: upComing,
        completed: completed,
    });

  return (
    <div className='contests-container'>
        <ContestList title='On Going' contests={contests.ongoing} />
        <ContestList title='Up Coming' contests={contests.upComing} />
        <ContestList title='Completed' contests={contests.completed} />
    </div>
  );
}

export default Contests;
