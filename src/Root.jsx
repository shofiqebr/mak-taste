
import { Outlet } from 'react-router-dom';
import Footer from './Pages/Footer/Footer';

const Root = () => {
    return (
        <div>
            navbar
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;