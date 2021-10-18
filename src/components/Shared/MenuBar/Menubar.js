import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../utilities/images/logo.png';
import './MenuBar.css';

const MenuBar = () => {
    const activeStyle = {
        color: "white",
        fontWeight: "700"
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="" variant="light" className="menu">
                <Container>
                    <Navbar href="#home" className="nav-brand">
                        <img className="img-fluid w-75 d-inline-block" src={logo} alt="" />
                    </Navbar>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink activeStyle={activeStyle} className="mx-2 text-decoration-none fw-bold" to="/home">Home</NavLink>
                            <NavLink activeStyle={activeStyle} className="mx-2 text-decoration-none fw-bold" to="/about">About</NavLink>

                        </Nav>
                        <Nav>
                            <NavLink activeStyle={activeStyle} className="mx-2 text-decoration-none fw-bold" to="/register">Register</NavLink>
                            <NavLink activeStyle={activeStyle} className="mx-2 text-decoration-none fw-bold" to="/login">Login</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default MenuBar;