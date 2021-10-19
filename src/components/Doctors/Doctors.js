import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from './Doctor/Doctor';
import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch("./doctors.json")
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, []);
    return (
        <div>
            <div className="doctors-banner d-flex align-items-center justify-content-center">
                <h1 className="text-white fw-bold">Meet Our Specialists</h1>
            </div>
            <Container>
                <Row xs={1} md={3} lg={4} className="my-5">
                    {
                        doctors?.map(doctor => <Doctor doctor={doctor} key={doctor.id}></Doctor>)
                    }
                </Row>

            </Container>

        </div>
    );
};

export default Doctors;