import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo-mesterix.png';
import { Button } from './Button';
import { ButtonLogIn } from './ButtonLogIn';
import './NavBar.scss';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src={Logo} />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/my-account-client' className='nav-links' onClick={closeMobileMenu}>
                                My Account Client
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/my-account-mester' className='nav-links' onClick={closeMobileMenu}>
                                My Account Mester
                            </Link>
                        </li>
                        {/* <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                                Sign-Up
                            </Link>
                        </li> */}
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                    
                    {button && <ButtonLogIn buttonStyle='btn--outline'>LOG IN</ButtonLogIn>}
                </div>
            </nav>
        </>
    )
}

export default NavBar;
