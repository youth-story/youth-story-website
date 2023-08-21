import CustomCard from './CustomCard';
import './ContestList.css';

const ContestList = ({contests, title}) => {
    return(
        <div className='contestslist-container'>
            <h1 className='heading'>{title} Contests</h1>
            <div className='cards'>
        {contests.length === 0 ? (
            <p className='no-contests'>No {title} contests</p>
        ) : (
            contests.map((contest, index) => (
            <CustomCard
                className='card'
                key={index}
                title={contest.title}
                subTitle={contest.subTitle}
                startDate={contest.startDate}
                endDate={contest.endDate}
                imageUrl={contest.image}
            />
            ))
        )}
        </div>
        </div>
    );
}

export default ContestList;