import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { DropdownNavLink, DropdownButton } from '../Dropdown';

import { useLanguage } from '../../hooks/useLanguage';

import { MdLanguage, MdSearch } from 'react-icons/md';
import { GoSignIn, GoSignOut } from 'react-icons/go';

import './Navbar.css';

const Navbar = () => {
    const [texts, setLang] = useLanguage();

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



                <NavLink to="/contact">
                    {texts.Navbar.contact}
                </NavLink>
            </div>
            

            <Link to="/" className="logo">
                <img src="/img/logo.png" alt="MrBravo" />
            </Link>


            <div className="right">
                <button><MdSearch />{texts.Navbar.search}</button>

                <Link><GoSignIn />{texts.Navbar.login}</Link>

                <DropdownButton name={<><MdLanguage />{texts.Navbar.language.name}</>}>
                    <button>
                        <img src="/img/countryflags/spain.svg" alt={texts.Navbar.language.esp} />
                        {texts.Navbar.language.esp}
                    </button>
                    <button>
                        <img src="/img/countryflags/unitedkingdom.png" alt={texts.Navbar.language.eng} />
                        {texts.Navbar.language.eng}
                    </button>
                    <button>
                        <img src="/img/countryflags/germany.svg" alt={texts.Navbar.language.ger} />
                        {texts.Navbar.language.ger}
                    </button>
                    <button>
                        <img src="/img/countryflags/france.svg" alt={texts.Navbar.language.fre} />
                        {texts.Navbar.language.fre}
                    </button>
                </DropdownButton>
            </div>
        </div>
    );
}

export default Navbar;