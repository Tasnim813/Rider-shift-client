import React from 'react';
import { Outlet } from 'react-router';
import auth from '../assets/authImage.png'
import Logo from '../Compnent/Logo/Logo';
const AuthLayout = () => {
    return (
        <div className=' max-w-7xl mx-auto '>
        <Logo></Logo>
         <div className=' grid grid-cols-1 sm:grid-cols-2 items-center'>
           <div className='flex-1 '>
            <Outlet></Outlet>
          </div>
          <div className='flex-1 '>
            <img src={auth} alt="" />
          </div>
         </div>
        </div>
    );
};

export default AuthLayout;