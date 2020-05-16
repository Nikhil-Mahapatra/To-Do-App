import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
        return (
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand as={ Link } to="/">TO-DO APP</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link as={ Link } to="#">Login</Nav.Link>
                    <Nav.Link as={ Link } to="RegistrationForm">Registration</Nav.Link>
                    <Nav.Link as={ Link } to="About">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        )
}

export default Header;