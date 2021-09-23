import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='flex justify-between '>
            <div className='options'>
                <Link to='/' className='option'>HOME</Link>
                <Link to='/document' className='option'>DOCUMENTATION</Link>
                <Link to='/premium' className='option'>PREMIUM</Link>
                <Link to='/dashboard' className='option'>DASHBOARD</Link>
            </div>
        </div>
    )
}

export default Header;