import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Education from './Education'
import {NavLink} from 'react-router-dom'

class Header extends React.Component{

    render(){
        return(
            <Container  className="Header">
                <Navbar className="navbar" sticky="top" expand="lg">
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav"/> */}
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className="navlink" to="/">About me</NavLink>
                            <NavLink className="navlink" to=""> Projects</NavLink>
                            <NavLink className="navlink" to="/education">Education</NavLink>
                            <NavLink className="navlink" to="#"> Blog</NavLink>
                            <NavLink className="navlink" to="#"> Contact</NavLink>
                        
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        
    )}
}
export default Header;