import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = (props) => {
    return (
        <div>
            navbar
            <Outlet/>
            footer
        </div>
    );
};

export default Root;