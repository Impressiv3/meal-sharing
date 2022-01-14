import "../styles/NavBar.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className='navbar'>
        <div className='nav-container'>
          <NavLink to='/' className='nav-logo'>
            <i className='fa fa-cutlery' aria-hidden='true'></i>
            Share Meal
            <i className='fa fa-cutlery' aria-hidden='true'></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
              <NavLink to='/' active='active' className='nav-links' onClick={handleClick}>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/meals'
                active='active'
                className='nav-links'
                onClick={handleClick}
              >
                Meals
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/reservation'
                active='active'
                className='nav-links'
                onClick={handleClick}
              >
                Reservation
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/reviews'
                active='active'
                className='nav-links'
                onClick={handleClick}
              >
                Reviews
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/add'
                active='active'
                className='nav-links'
                onClick={handleClick}
              >
                Add Meal
              </NavLink>
            </li>
          </ul>
          <div className='nav-icon' onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}
