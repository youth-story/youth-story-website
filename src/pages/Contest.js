import './css/Contest.css';
import Header from '../components/Contests/Header';
import Info from '../components/Contests/Info';
import Announcement from '../components/Contests/Announcement';
import Prizes from '../components/Contests/Prizes';
import DrawerAppBar from '../components/AppBar/DrawerAppBar';

const Contest = () => {
    return (
        <div className='contest-container'>
            <DrawerAppBar />
            <Header />
            <div className='content'>
                <Info />
                <Announcement />
                <Prizes />
            </div>
        </div>
    );
}

export default Contest;