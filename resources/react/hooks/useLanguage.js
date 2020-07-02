import { useContext, useState, useEffect } from 'react';
import { Context } from '../Context';

import espTexts from '../lang/spanish';
// import engTexts from '../lang/eng';

export const useLanguage = () => {
    const [state, setState] = useContext(Context);
    const [texts, setTexts] = useState((state.lang === 'esp') ? espTexts : engTexts);

    useEffect(() => {
        setTexts((state.lang === 'esp') ? espTexts : engTexts);
    }, [state.lang]);

    const setLang = (lang) => {
        setState(state => ({ ...state, lang }));
    }

    return [texts, setLang];
}