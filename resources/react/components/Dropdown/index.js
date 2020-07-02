import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import './Dropdown.css';

export const DropdownNavLink = ({ to, name, children }) => {
    const ref = useRef();
    const [isDisplay, setIsDisplay] = useState(false);
    
    const transitions = useTransition(isDisplay, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 200 }
    });

    return (
        <div className="DropdownLink" onMouseEnter={() => setIsDisplay(true)} onMouseLeave={() => setIsDisplay(false)}>
            <NavLink to={to} className="name" activeClassName="name active">{name}</NavLink>

            {isDisplay && transitions.map(
                ({ item, key, props }) => 
                    item && <animated.div className="content" key={key} style={{ ...props }}>
                        {children}
                    </animated.div>
            )}
        </div>
    );
}