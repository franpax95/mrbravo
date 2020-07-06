import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import './Dropdown.css';

export const DropdownNavLink = ({ to, name, children }) => {
    const [isDisplay, setIsDisplay] = useState(false);
    
    const transitions = useTransition(isDisplay, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 200 }
    });

    return (
        <div className="Dropdown DropdownLink" onMouseEnter={() => setIsDisplay(true)} onMouseLeave={() => setIsDisplay(false)}>
            <NavLink to={to} activeClassName="active">{name}</NavLink>

            {isDisplay && transitions.map(
                ({ item, key, props }) => 
                    item && <animated.div className="content" key={key} style={{ ...props }}>
                        {children}
                    </animated.div>
            )}
        </div>
    );
}

export const DropdownButton = ({ name, children }) => {
    const [isDisplay, setIsDisplay] = useState(false);
    
    const transitions = useTransition(isDisplay, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 200 }
    });

    return (
        <div className="Dropdown DropdownButton">
            <button onClick={() => setIsDisplay(!isDisplay)}>{name}</button>

            {isDisplay && transitions.map(
                ({ item, key, props }) => 
                    item && <animated.div className="content" key={key} style={{ ...props }}>
                        {children}
                    </animated.div>
            )}
        </div>
    );
}