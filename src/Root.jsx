
import { Outlet } from 'react-router-dom';
import Footer from './Pages/Footer/Footer';
import Navbar from './Pages/Navbar/Navbar';
import BottomNavbar from './Pages/Navbar/BottomNavbar';
import MarqueNavar from './Pages/Navbar/marqueeNavbar/MarqueNavbar';


const Root = () => {
    return (
        <div>
            <Navbar />
            <MarqueNavar/>
            <search/>
            <BottomNavbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;