import React from 'react';
import Logo from '../../assets/Original on transparent.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div>
        <nav>
        <figure>
          <img src={Logo} className="logo-img" alt="" />
        </figure>
        <ul className="nav-links">
          <li><Link to='/' className="link" >Home</Link></li>
          <li><Link to='/search' className="link" >Browse</Link></li>
          <li><button className="nav-btn" >Contact Us</button></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar