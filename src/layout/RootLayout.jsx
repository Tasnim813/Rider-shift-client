import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../page/Home/shared/Navbar';
import Footer from '../page/Home/shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;