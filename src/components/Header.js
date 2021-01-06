import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Education from './Education'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {

    render() {
        return (
            <div className="Header">
                <div className="Mynavbar">
                    <NavLink className="navlink" to="/">About me</NavLink>
                    <NavLink className="navlink" to="/portfolio"> Projects</NavLink>
                    <NavLink className="navlink" to="/education">Education</NavLink>
                    <NavLink className="navlink" to="#"> Blog</NavLink>
                    <NavLink className="navlink" to="/contact"> Contact</NavLink>
                </div>
            </div>

        )
    }
}
export default Header;