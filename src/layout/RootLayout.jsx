import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../page/Home/shared/Navbar';
import Footer from '../page/Home/shared/Footer';

const RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto '>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;