import React from 'react';
import logo from '../static/logo';
import './header.scss';

const Header = () => <div className="header">
    <img src={logo} alt="logo" className="logo"/>
    <div className="right-items">
        <div className="menu-link">For Retailers</div>
        <div className="menu-link">Log In</div>
        <div className="button">Sign Up</div>
    </div>
</div>;

export default Header;