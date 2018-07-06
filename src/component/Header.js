import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';
import logo from '../assets/img/ag-shield.svg';
import './Header.css';

const Header = () => {
    let btn = {
        height: '40px',
        width: '109px',
        background: '#FD1B00',
        lineHeight: '40px'
    }

    return (
        <nav className='header'>
            <img src={logo} className='header-logo' />
            <Search />
            <ul>
                <li><NavLink className='nav-link' to='/'>Home</NavLink></li>
                <li><NavLink className='nav-link' to='/about'>About</NavLink></li>
                <li><NavLink className='nav-link' to='/categories'>Category</NavLink></li>
                <li style={btn}><NavLink className='nav-link nav-link-subscribe' to='/subscribe'>Subscribe</NavLink></li>
            </ul>
      </nav>
    )
}

export default Header;