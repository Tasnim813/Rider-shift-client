import React from 'react';
import Logo from '../../../Compnent/Logo/Logo';
import { Link, NavLink } from 'react-router';
import useAuth from '../../../hook/useAuth';

const Navbar = () => {
  const{user,LogOut} =useAuth()
    const links=<>
    <li><NavLink to="/">Services</NavLink></li>
    <li><NavLink to="/coverage">Coverage</NavLink></li>
    </>
    const handleLogOut=()=>{
      LogOut()
      .then()
      .catch(error=>{
        console.log(error)
      })

    }
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Logo></Logo>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-5">
   {
    user ?  <Link to="/register" onClick={handleLogOut} className="btn bg-white text-black font-bold">Sign out</Link>: <Link to="/register" className="btn bg-white text-black font-bold">Sign In</Link>
   }


    <Link to="/beRider" className="btn bg-white text-black font-bold">Be a Rider</Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;