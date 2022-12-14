import React, { useState }  from 'react'
import {Link} from "react-scroll"

import "./Footer.css"
const Footer = () => {
   const [, setClick] = useState(false)

    const closeMenu = () => setClick(false)
  return (
    <div className='footer'>
        <div className='containeri'>
            <ul>
                <li className='nav-item'>
                <Link  to="Main" spy={true} smooth={true} offset={-100} duration={500}    onClick={closeMenu}>Anasayfa</Link>
                </li>

                <li className='nav-item'>
                <Link  to="We" spy={true} smooth={true} offset={-100} duration={500}    onClick={closeMenu}>Hakkımızda</Link>
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
                <div className='bottom'>
                    <span className='line'></span>
                    <p>© 2018 CasLakas Kuofor </p>
                </div>
        </div>
    </div>
  )
}

export default Footer
