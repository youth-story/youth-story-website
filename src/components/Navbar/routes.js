import { Home, Search, Favorite, Menu, Folder, RecordVoiceOver, LibraryBooks, TrendingUp } from '@material-ui/icons';
import InfoIcon from '@mui/icons-material/Info';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const drawerItems = [
    { to:"/", label: 'Home', icon: <Home /> },
    { to: '/success-stories', label: 'Success Stories', icon: <TrendingUp /> },
    { to: '/interviews', label: 'Interviews', icon: <RecordVoiceOver /> },
    { to: '/magazine', label: 'Magazine', icon: <LibraryBooks /> },
    { to: '/search', label: 'Search', icon: <Search /> },
    { to:"/resources", label: 'Resources', icon: <Folder /> },
    { to: '/news', label: 'News', icon: <NewspaperIcon /> },
    { to: '/social', label: 'Social', icon: <PeopleIcon /> },
    { to: '/about', label: 'About', icon: <InfoIcon /> },
    { to: '/sponsor', label: 'Sponsor', icon: <AttachMoneyIcon /> },
  ];

export default drawerItems;