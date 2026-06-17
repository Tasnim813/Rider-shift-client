import React from 'react';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router';
const Logo = () => {
    return (
       <div>
         <NavLink to="/" className="flex  items-end ">

            <img src={logo} alt="Logo" />
            <p className="font-bold text-3xl -ms-2 ">Zapshift</p>
    
        </NavLink>
       </div>
    );
};

export default Logo;