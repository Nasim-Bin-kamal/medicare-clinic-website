import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../utilities/images/logo.png';
import './MenuBar.css';

const Menubar = () => {
    const activeStyle = {
        color: "white",
        fontWeight: "700"
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar href="#home" className="nav-brand">
                        <img className="img-fluid w-75 d-inline-block" src={logo} alt="" />
                    </Navbar>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink activeStyle={activeStyle} className="mx-2 text-decoration-none" to="/home">Home</NavLink>
                            <NavLink activeStyle={activeStyle} className="mx-2 text-decoration-none" to="/about">About</NavLink>

                        </Nav>
                        <Nav>
                            <NavLink activeStyle={activeStyle} className="mx-2 text-decoration-none" to="/register">Register</NavLink>
                            <NavLink activeStyle={activeStyle} className="mx-2 text-decoration-none" to="/login">Login</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menubar;