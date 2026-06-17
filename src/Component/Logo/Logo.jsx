import React from 'react';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router';
const Logo = () => {
    return (
       <div>
         <div to="/" className="flex  items-end justify-center">

            <img src={logo} alt="Logo" />
            <p className="font-bold text-3xl -ms-2 ">Zapshift</p>
    
        </div>
       </div>
    );
};

export default Logo;