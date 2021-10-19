import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../utilities/images/logo.png';
import './MenuBar.css';

const MenuBar = () => {
    const { user, handleSignOut } = useAuth();
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
                            <NavLink activeStyle={activeStyle} className="mx-2 text-decoration-none fw-bold" to="/about">About Us</NavLink>
                            <NavLink activeStyle={activeStyle} className="mx-2 text-decoration-none fw-bold" to="/doctors">Doctors</NavLink>

                        </Nav>
                        <Nav>
                            <NavLink activeStyle={activeStyle} className="mx-2 text-decoration-none fw-bold" to="/register">Register</NavLink>
                            {
                                !user?.email ? <NavLink activeStyle={activeStyle} className="mx-2 text-decoration-none fw-bold" to="/login">Login</NavLink>
                                    :
                                    <div className="mx-3 d-flex align-items-center justify-content-center">
                                        <img className="rounded-circle mx-2" src={user?.photoURL} alt="" style={{ width: '40px' }} />
                                        <span>{user?.displayName}</span>
                                        <Button onClick={handleSignOut} className="mx-2 px-3 rounded-pill" variant="danger" size="sm">Log Out</Button>
                                    </div>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default MenuBar;