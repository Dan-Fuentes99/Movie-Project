import React from 'react';
import { Link } from 'react-router';
import './Footer.css';

function Footer() {
  return (
    <div>
        <footer>
            <div>
                <ul className="footer-links">
                    <li><Link to='/' className='footer-link' >Home</Link></li>
                    <li><Link to='/search' className='footer-link' >Search</Link></li>
                    <li><Link className='footer-link contact' >Contact Us</Link></li>
                </ul>
            </div>
        <p className='footer-copyright'>© 2025 DF Films and Shows. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default Footer