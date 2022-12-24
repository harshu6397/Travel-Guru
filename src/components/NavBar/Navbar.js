import React from 'react';
import "./Navbar.css";



const Header = () => {
    return (
        <>
            <div className="navbar">
                <div className="name">
                    <h1>Travel Guru</h1>
                </div>
                <div className="search">
                    <span>Explore new Places</span>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="New Delhi" />
                </div>
            </div>
        </>
    )
}

export default Header;