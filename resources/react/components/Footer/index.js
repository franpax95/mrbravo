import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

import './Footer.css';

const Footer = () => {
    const [texts, setLang] = useLanguage();

    return (
        <div className="Footer">

        </div>
    );
}

export default Footer;