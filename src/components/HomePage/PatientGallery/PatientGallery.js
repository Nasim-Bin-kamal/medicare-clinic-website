import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './PatientGallery.css';

const PatientGallery = () => {
    return (
        <div>
            <Container>
                <h2 className="text-center text-secondary fw-bold text-uppercase my-5">Patient Gallery</h2>
                <Row xs={1} md={2} lg={3} className="mx-auto my-5">
                    <Col className="p-3 patient">
                        <img className="img-fluid patient-img" src="https://i.ibb.co/ZMZk9mf/asset-3.jpg" alt="" />
                    </Col>
                    <Col className="p-3 patient">
                        <img className="img-fluid patient-img" src="https://i.ibb.co/pjzHC4N/asset-9.jpg" alt="" />
                    </Col>
                    <Col className="p-3 patient">
                        <img className="img-fluid patient-img" src="https://i.ibb.co/YZpw5YJ/asset-13.jpg" alt="" />
                    </Col>
                    <Col className="p-3 patient">
                        <img className="img-fluid patient-img" src="https://i.ibb.co/zbysxg0/asset-7.jpg" alt="" />
                    </Col>
                    <Col className="p-3 patient">
                        <img className="img-fluid patient-img" src="https://i.ibb.co/FbxR080/asset-8.jpg" alt="" />
                    </Col>
                    <Col className="p-3 patient">
                        <img className="img-fluid patient-img" src="https://i.ibb.co/ZMZk9mf/asset-3.jpg" alt="" />
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default PatientGallery;