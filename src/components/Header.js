import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    
    return (
        <header id="header">
            <div className="inner">
                <Link to="/" className="logo">Capa </Link>
                <nav id="nav">
                    <Link to="/">Home</Link>
                    <Link to="/films">Reviews</Link>
                    <Link to="/login">Login</Link>
                </nav>
                <a href="#navPanel" className="navPanelToggle"><span className="fa fa-bars"></span></a>
            </div>
        </header>
    )
}
export default Header;
