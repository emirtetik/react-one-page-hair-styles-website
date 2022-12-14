import React, { useState } from 'react'
import {Link} from "react-scroll"
import { FaBars, FaTimes } from 'react-icons/fa'
// import logo from './images/logo.png'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <Link href='Main' className='logo'>
                    <h1>LOGO</h1>
                </Link>
                 <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div> 
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    
                    <li className='nav-item'>
                        <Link  to="Main" spy={true} smooth={true} offset={-100} duration={500}  onClick={closeMenu}>Anasayfa</Link>
                    </li>

                    <li className='nav-item'>
                    <Link  to="We" spy={true} smooth={true} offset={-100} duration={500}  onClick={closeMenu}>Hakkımızda</Link>
                        
                    </li>

                    <li className='nav-item'>
                    <Link  to="services" spy={true} smooth={true} offset={-100} duration={500}    onClick={closeMenu}>Hizmetlerimiz</Link>

                    </li>

                    <li className='nav-item'>
                    <Link  to="image" spy={true} smooth={true} offset={-100} duration={500}    onClick={closeMenu}>Galeri</Link>

                    </li>

                    <li className='nav-item'>
                    <Link  to="price" spy={true} smooth={true} offset={-150} duration={500}    onClick={closeMenu}>Fiyat</Link>

                    </li>
                  

                </ul>
            </nav>
        </div>
    )
}

export default Navbar
