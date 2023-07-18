import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className=" flex justify-between px-10 items-center border-b">
      <div className="logo-container flex text-4xl font-semibold align-middle items-center">
        <img src={planet} width="80px" height="80px" alt="logo" className="me-4" />
        <h2>Space Travelers&apos; Hub</h2>
      </div>
      <ul className="flex">
        <li className="me-2">
          <NavLink to="/">Rockets</NavLink>

        </li>
        <li className="me-2">
          <NavLink to="/missions">Missions</NavLink>
        </li>
        <li className="me-2">
          <NavLink to="/myprofile">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
