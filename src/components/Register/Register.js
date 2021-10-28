import React from 'react';
import './Register.css'
import { Col, Form, Row, Button, Container } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import image from '../../utilities/images/login-register.jpg';


const Register = () => {
    const { newUserRegister, setErrorMsg, setUser, setLoading, setUserName, password, verifyEmail, handleNameChange, handleEmailChange, handlePasswordChange, errorMsg } = useAuth();

    const location = useLocation();
    const redirectUrl = location.state?.from || "/home";
    const history = useHistory();

    // handle new user register by register button
    const handleUserRegister = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setErrorMsg('Password Must be 6 character long');
            return;
        }
        else if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setErrorMsg('Password must contain at least 2 uppercase letter');
            return;
        }
        newUserRegister()
            .then(result => {
                history.push(redirectUrl);
                setUserName();
                setUser(result?.user);
                setErrorMsg('');
                verifyEmail();
            }).catch(error => {
                setErrorMsg(error.message);
            }).finally(() => setLoading(false));

    }

    return (
        <Container>
            <div className="border rounded-3 mx-auto my-5 p-3">
                <Row xs={1} md={2} lg={2} className="d-flex align-items-center justify-content-center">
                    <Col className="mx-auto p-2">
                        <Form
                            onSubmit={handleUserRegister}
                            className="w-75 mx-auto border rounded-3 my-5 p-2 shadow-sm">
                            <h3 className="text-center mx-auto mb-4">Please Register First</h3>
                            <Form.Group className="mb-3 " controlId="formBasicText">
                                <Form.Control
                                    onBlur={handleNameChange}
                                    type="text"
                                    placeholder="Full Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control
                                    onBlur={handleEmailChange}
                                    type="email"
                                    placeholder="Email Address" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control
                                    onBlur={handlePasswordChange}
                                    type="password"
                                    placeholder="Password" />
                            </Form.Group>
                            <div>
                                <p className="text-center mx-auto text-danger">{errorMsg}</p>
                            </div>

                            <Button
                                className="w-50 rounded-pill mx-auto my-4 d-flex justify-content-center buttonBg"
                                variant=""
                                type="submit">
                                Register
                            </Button>
                            <p className="text-center my-3 mx-auto texti-muted "><small>Or Register With</small></p>
                            <div className="d-flex align-content-center justify-content-center">
                                <i className="fab fa-facebook mx-2  mb-3 fs-3"></i>
                                <i className="fab fa-google mx-2  mb-3 fs-3"></i>
                                <i className="fab fa-github mx-2  mb-3 fs-3"></i>
                                <i className="twitter-logo fab fa-twitter  mx-2  mb-3 fs-3"></i>
                            </div>

                            <div className="text-center mx-auto my-3">
                                <NavLink to="/login">Already Registered?</NavLink>
                            </div>

                        </Form>
                    </Col>
                    <Col className="mx-auto p-2">
                        <img className="img-fluid" src={image} alt="" />
                    </Col>
                </Row>
            </div>
        </Container >
    );
};

export default Register;