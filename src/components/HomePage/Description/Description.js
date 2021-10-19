import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Description = () => {
    return (

        <Container>
            <div>
                <Row xs={1} md={2} lg={2} className="d-flex align-items-center justify-content-center my-5 mx-auto">
                    <Col className="p-3">
                        <h2 className="text-primary my-3">What We Provide</h2>
                        <div className="text-secondary">
                            <p>Our Clinic, an organized medical service offering diagnostic, therapeutic, or preventive outpatient services. </p>
                            <p>Often, the term covers an entire medical teaching centre, including the hospital and the outpatient facilities. The medical care offered by a clinic may or may not be connected with a hospital.</p>
                            <p>The entire activity when connected with a hospital is typically called the outpatient department, and the specific subdivisions may be referred to as clinics.</p>
                        </div>
                    </Col>
                    <Col className="p-3">
                        <img className="img-fluid" src="https://i.ibb.co/LpYxkvX/asset-5.jpg" alt="" />
                    </Col>
                </Row>
            </div>
        </Container>

    );
};

export default Description;