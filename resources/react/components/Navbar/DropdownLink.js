import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';

export const DropdownLink = ({ to, name, children }) => {
    const height = children.length * 75;

    const ref = useRef();

    const dropdownEnter = (e) => {
        ref.current.style.height = `${height}px`;
        e.target.children[1].style.opacity = 1;
    }

    const dropdownLeave = (e) => {
        //ref.current.style.height = '100px';
        e.target.children[1].style.opacity = 0;
    }


    return (
        <div 
            className="dropdown"
            // onMouseEnter={dropdownEnter}
            // onMouseLeave={dropdownLeave}
            ref={ref}
        >

            <NavLink to={to}>
                {name}
            </NavLink>

            <div 
                className="dropdown-content"
                // onMouseEnter={e => e.stopPropagation()}
                // onMouseLeave={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
}