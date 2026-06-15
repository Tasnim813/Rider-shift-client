import React from 'react';
import logo from '../../assets/logo.png'
const Logo = () => {
    return (
        <div className="flex  items-end justify-center">

            <img src={logo} alt="Logo" />
            <p className="font-bold text-3xl -ms-2 ">Zapshift</p>
    
        </div>
    );
};

export default Logo;