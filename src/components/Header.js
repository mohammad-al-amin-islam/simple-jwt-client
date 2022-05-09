import React from 'react';
import './Header.css'
import ActiveLink from './ActiveLink';

const Header = () => {
    return (
        <div className='bg-color' >
            <nav className='link'>
                <ActiveLink to='/home'>Home</ActiveLink>
                <ActiveLink to='/login'>Login</ActiveLink>
                <ActiveLink to='/order'>Order</ActiveLink>
                <ActiveLink to='/about'>About</ActiveLink>
            </nav>
        </div>
    );
};

export default Header;