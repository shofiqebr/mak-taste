
import { Outlet } from 'react-router-dom';
import Footer from './Pages/Footer/Footer';
import Navbar from './Pages/Navbar/Navbar';
import BottomNavbar from './Pages/Navbar/BottomNavbar';
import Search from './Pages/Navbar/Search';

const Root = () => {
    return (
        <div>
            <Navbar />
            <Search/>
            <BottomNavbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;