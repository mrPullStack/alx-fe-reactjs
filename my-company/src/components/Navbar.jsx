import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    const navbarStyle = {
        backgroundColor: '#333',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '10px',
    };

    const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
    }
    return (
        <nav style={{ padding: '10px', backgroundColor: '#eee', textAlign: 'center' }}>
            <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
            <Link to="/about" style={{ margin: '0 10px' }}>About</Link>
            <Link to="/services" style={{ margin: '0 10px' }}>Services</Link>
            <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link>
        </nav>
    );
}

export default Navbar;