import React from 'react';
import './Header.css'

function Header() {
    return (
        <div>
           <header>
               <a href="#" className="logo"><span>Real</span>Estate</a>
               <nav className="navbar">
               <a href="#">Home</a> 
               <a href="#">Service</a> 
               <a href="#">Features</a> 
               <a href="#">Agents</a>
               <a href="#">Contact</a> 
               </nav>
               <div className="icons">
               <div id="menu-bars" className="fas fa-bars"></div>
               <a href="#" className="fas fa-heart"></a> 
               <a href="#" className="fas fa-user"></a> 
               </div>
               </header> 
        </div>
    )
}

export default Header;
