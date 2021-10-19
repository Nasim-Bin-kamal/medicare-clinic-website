import React from 'react';
import { Col } from 'react-bootstrap';
import './Doctor.css'

const Doctor = ({ doctor }) => {
    const { name, image, designation } = doctor || {};
    return (
        <div>
            <Col className="m-2 p-2 doctor">
                <img className="img-fluid doctor-image" src={image} alt="" />
                <div className="mt-3">
                    <h4>{name}</h4>
                    <p>{designation}</p>
                </div>
            </Col>
        </div>
    );
};

export default Doctor;