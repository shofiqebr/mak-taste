import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Pages/Footer/Footer';

const Root = (props) => {
    return (
        <div>
            navbar
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;