import React, { FC } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";

interface INavBarProps {}

const NavBar: React.FC<INavBarProps> = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" className="navbar-brand">
          Logo
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink to="/" className={({isActive})=>`nav-link ${isActive ? "active text-info":""}`}>
                Home 
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink to="service" className={({isActive})=>`nav-link ${isActive ? "active text-info":""}`}>
                Service
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink to="gallery" className={({isActive})=>`nav-link ${isActive ? "active text-info":""}`}>
                Gallery
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink to="contact-us" className={({isActive})=>`nav-link ${isActive ? "active text-info":""}`}>
                Contact Us
              </NavLink>
            </li>
           
          </ul>
          
        </div>
      </nav>
    </>
  );
};

export default NavBar;
