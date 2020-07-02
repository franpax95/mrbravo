import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { DropdownNavLink } from '../Dropdown';

// import { DropdownLink } from './DropdownLink';

import { useLanguage } from '../../hooks/useLanguage';

import './Navbar.css';

const Navbar = () => {
    const [texts, setLang] = useLanguage();

    const dropdownEnter = (e) => {
        e.target.children[1].style.opacity = 1;
    }

    const dropdownLeave = (e) => {
        e.target.children[1].style.opacity = 0;
    }

    return (
        <div className="Navbar">
            <div className="left">

                <DropdownNavLink to="/" name={texts.Navbar.shop}>
                    <Link to="/">Primavera</Link>
                    <Link to="/">Verano</Link>
                    <Link to="/">Nueva colección</Link>
                    <Link to="/">Pantalones</Link>
                </DropdownNavLink>

                <DropdownNavLink to="/" name={texts.Navbar.about}>
                    <Link to="/">Primavera</Link>
                    <Link to="/">Verano</Link>
                    <Link to="/">Nueva colección</Link>
                    <Link to="/">Pantalones</Link>
                </DropdownNavLink>

                {/* <div className="dropdown" onMouseEnter={dropdownEnter} onMouseLeave={dropdownLeave}>
                    <NavLink to="/">
                        {texts.Navbar.about}
                    </NavLink>
                    <div className="dropdown-content">
                        <Link to="/">Primavera</Link>
                        <Link to="/">Verano</Link>
                        <Link to="/">Nueva colección</Link>
                        <Link to="/">Pantalones</Link>
                    </div>
                </div> */}

                <NavLink to="/contact">
                    {texts.Navbar.contact}
                </NavLink>
            </div>
            

            <div className="center">
                <h3>(logo)</h3>
            </div>


            <div className="right">
                <div>(Búsqueda)</div>
                <div>{texts.Navbar.login}</div>
                <div>{texts.Navbar.signup}</div>
                <div>{texts.Navbar.language}</div>
            </div>
        </div>
    );
}

export default Navbar;