import React from 'react';
import logo from './icon-removebg-preview.png'
import './Nav.css'

const Nav = () => {
    return (
        <div className='nav-container'>
            <img src={logo} alt="" />
            <div className='nav-menu'>
                <a href="/home">Home</a>
                <a href="/shopping">Shopping</a>
                <a href="/services">Services</a>
                <a href="/about">About Us</a>


            </div>
        </div>
    );
};

export default Nav;