import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar w-full flex justify-between items-center px-12 py-4 shadow-md ">
    <div className="logo">
      <a href="/" className="text-2xl font-semibold">Math Magicians</a>
    </div>

    <ul className="menulinks flex">
      <li>
        <NavLink to="/" className="border-y-0 border-l-0 border-r-2 px-1 mr-3 border-r-black font-bold">Home</NavLink>
      </li>
      <li>
        <NavLink to="calculator" className="border-y-0 border-l-0 border-r-2 pr-1 mr-3 border-r-black font-bold">Calculator</NavLink>
      </li>
      <li><NavLink to="quotes" className="font-bold">Quote</NavLink></li>
    </ul>
  </div>
);

export default Navbar;
