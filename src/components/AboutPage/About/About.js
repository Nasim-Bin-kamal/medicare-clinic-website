import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center about-banner">
                <h1 className=" text-uppercase text-white fw-bold">About Us</h1>
            </div>
            <Container>
                <div >
                    <h2 className="text-center text-uppercase my-5 fw-bold">Board Of Directors</h2>
                    <Row xs={1} md={2} lg={3} className="my-5 mx-auto">
                        <Col>
                            <div className="m-2 shadow-sm p-3  rounded-3">
                                <img className="img-fluid pb-3" src="https://i.ibb.co/8gYVvr0/asset-33.jpg" alt="" />
                                <p>Cosmetic Surgeon</p>
                                <h4>Stephanie Wosniack</h4>
                                <small>
                                    This includes reconstructive surgery which is aimed at restoring any body parts that are abnormal due to injury, cancer or birth defect and cosmetic surgery (breast augmentation, face lifts), which aims at reshaping and enhancing aesthetics.</small>
                            </div>
                        </Col>
                        <Col>
                            <div className="m-2 shadow-sm p-3  rounded-3">
                                <img className="img-fluid pb-3" src="https://i.ibb.co/Q8vvfx0/asset-29.jpg" alt="" />
                                <p>Cardiac Surgeon</p>
                                <h4>Edward Nash</h4>
                                <small>Cardiothoracic Surgeons generally perform surgery of the heart and chest. Cardiologists work with surgeons to manage patients and determine whether the patient needs surgery. They might also work together to treat irregular heart beat problems.</small>
                            </div>
                        </Col>
                        <Col>
                            <div className="m-2 shadow-sm p-3  rounded-3">
                                <img className="img-fluid pb-3" src="https://i.ibb.co/fpdsG8w/asset-30.jpg" alt="" />
                                <p>Pediatrician</p>
                                <h4>Hellen Lowe</h4>
                                <small>A Pediatrician, or Children's Doctor, is responsible for the medical care of babies and children,up to the age of 21, and can include physical and psychological disorders and diseases.Their duties include diagnosis, treatment of the patient in a variety of work .</small>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default About;