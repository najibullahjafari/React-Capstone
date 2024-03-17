import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMicrophone, faCog } from '@fortawesome/free-solid-svg-icons';
import '../style/header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <FontAwesomeIcon icon={faBars} className="navbar-icon" />
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            My Crypto
          </a>
        </div>
        <div className="navbar-icons">
          <FontAwesomeIcon icon={faMicrophone} className="navbar-icon" />
          <FontAwesomeIcon icon={faCog} className="navbar-icon" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
