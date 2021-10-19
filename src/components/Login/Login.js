import React from 'react';
import './Login.css';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import image from '../../utilities/images/login-register.jpg'


const Login = () => {
    const { handleUserSignIn, handleEmailChange, handlePasswordChange, handleFacebookSignIn, handleGithubSignIn, handleGoogleSignIn, handleTwitterSignIn, errorMsg } = useAuth();

    const location = useLocation();
    const redirectUrl = location.state?.from || "/shop";
    console.log('came from', redirectUrl);
    const history = useHistory();

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirectUrl);
            });

    }

    return (

        <Container>
            <div className="border rounded-3 mx-auto my-5 p-3">
                <Row xs={1} md={2} lg={2} className="d-flex align-items-center justify-content-center">
                    <Col className="mx-auto p-2">
                        <Form
                            onSubmit={handleUserSignIn}
                            className="w-75 mx-auto border rounded-3 my-5 p-2 shadow-sm">
                            <h3 className="text-center mx-auto mb-4">Please Log In First</h3>
                            {/* <Form.Group className="mb-3 " controlId="formBasicText">
                                <Form.Control type="text" placeholder="Full Name" />
                            </Form.Group> */}
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

                            <Button className="w-50 rounded-pill mx-auto d-flex justify-content-center buttonBg" variant="" type="submit">
                                Log In
                            </Button>
                            <p className="text-center my-3 mx-auto texti-muted "><small>Or Login With</small></p>
                            <div className="d-flex align-content-center justify-content-center">
                                <i onClick={handleFacebookSignIn} className="fab fa-facebook mx-2  mb-3 fs-3"></i>
                                <i onClick={googleSignIn} className="fab fa-google mx-2  mb-3 fs-3"></i>
                                <i onClick={handleGithubSignIn} className="fab fa-github mx-2  mb-3 fs-3"></i>
                                <i onClick={handleTwitterSignIn} className="twitter-logo fab fa-twitter  mx-2  mb-3 fs-3"></i>
                            </div>

                            <div className="text-center mx-auto my-3">
                                <NavLink to="/register">Register New Account</NavLink>
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

export default Login;