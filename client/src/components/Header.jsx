import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div>
            <h3><Link to="/">Go back home</Link></h3>
        </div>
    );
}

export default Header;