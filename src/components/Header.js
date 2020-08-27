import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

class Header extends React.Component{
    render(){
        return(
            <Container  className="Header">
                <Navbar className="navbar" sticky="top" expand="lg">
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav"/> */}
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link className="navlink"> About me</Nav.Link>
                            <Nav.Link className="navlink"> Projects</Nav.Link>
                            <Nav.Link className="navlink"> Education</Nav.Link>
                            <Nav.Link className="navlink"> Experience</Nav.Link>
                            <Nav.Link className="navlink"> Skills</Nav.Link>
                            <Nav.Link className="navlink"> Blog</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        
    )}
}
export default Header;