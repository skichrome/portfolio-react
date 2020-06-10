import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
      <header className="header">
          <nav className="headerMenu">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/contact">Contact</NavLink>
          </nav>
      <div>
          Social media icons
      </div>
      </header>
   );
 }

export default Header