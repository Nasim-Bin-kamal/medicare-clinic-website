import React from 'react';
import { Col, Container, Row, Button, InputGroup, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../utilities/images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer mx-auto">
            <Container>
                <Row xs={1} md={4} lg={4} className="py-5 mx-auto">
                    <Col >
                        <img className="img-fluid w-50 mb-3" src={logo} alt="" />
                        <p><small>Our main purpose of our organization is to serve the people properly.</small></p>
                        <h4 className="text-white">Social Links</h4>
                        <div className="d-flex justify-content-start align-items-center my-3">
                            <i className="social fab fa-facebook-f me-4"></i>
                            <i className="social fab fa-instagram me-4"></i>
                            <i className="social fab fa-twitter me-4"></i>
                            <i className="social fab fa-youtube me-4"></i>
                        </div>
                    </Col>
                    <Col className="mx-auto">
                        <h5 className="text-white">Quick Navigation</h5>
                        <ul className="quickNav">
                            <li>
                                <NavLink className="menu-item" to="/home">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className="menu-item" to="/about">About Us</NavLink>
                            </li>
                            <li>
                                <NavLink className="menu-item" to="/doctors">Doctors</NavLink>
                            </li>
                            <li>
                                <NavLink className="menu-item" to="/register">Register</NavLink>
                            </li>
                            <li>
                                <NavLink className="menu-item" to="/login">Log In</NavLink>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <h5 className="text-white mb-3">Working Hours</h5>
                        <p>Sat – Fri: 9 a.m. – 5 p.m.</p>
                        <p>24 hours service.</p>

                        <address>
                            <i>3620, Chandpur</i><br />
                            <i>Bangladesh</i>

                        </address>
                    </Col>
                    <Col >
                        <h5 className="text-white mb-3">Subscribe</h5>

                        <InputGroup className="my-4">
                            <FormControl
                                type="email"
                                placeholder="Enter your email"
                                aria-label="Enter your email"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-warning" id="button-addon2">
                                Subscribe
                            </Button>
                        </InputGroup>
                        <p>We are always promised to providing healthcare services.</p>
                    </Col>

                </Row>

            </Container>
            <div className="p-4 text-center fw-lighter footer-end" >
                <p>Copyright 2021 | All Rights Reserved By Medicare LTD.</p>
            </div>
        </div>
    );
};

export default Footer;