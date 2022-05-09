import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function ActiveLink({ children, to, ...props }: LinkProps) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div className='link'>
            <Link
                style={{ color: match ? "blue" : "black" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

export default ActiveLink;