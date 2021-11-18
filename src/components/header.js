import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  useEffect(() => {
    const head = document.querySelector('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        head.classList.add('fixed');
      } else {
        head.classList.remove('fixed');
      }
    });
  }, []);
  return (
    <header>
      <div className="header-container shadow-bottom">
        <div className="img-h1">
          <img className="logo1" id="logo" src="https://cdn-icons-png.flaticon.com/512/3212/3212608.png" alt="" />
          <h1><NavLink to="/">Space Rocket Hub</NavLink></h1>
        </div>
        <nav>
          <div className="links">
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="selected">Rockets</NavLink>
              </li>
              <li>
                <NavLink to="/dragons" exact activeClassName="selected">Dragons</NavLink>
              </li>
              <li>
                <NavLink to="/mission" activeClassName="selected"> Missions</NavLink>
              </li>
              <li>
                <NavLink to="/myProfile" activeClassName="selected"> My Profile</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
