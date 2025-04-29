import React, { useState } from 'react'

function NavbarComp() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="Navbar">
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#contactus">Contact Us</a>
            </div>
            <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>
        </div >
    );
}

export default NavbarComp