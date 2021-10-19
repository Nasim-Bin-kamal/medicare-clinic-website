import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './SingleService.css'

const SingleService = ({ service }) => {
    const { id, name, image, desc } = service || {};
    const history = useHistory();
    const handleServiceDetails = () => {
        history.push(`/service/${id}`);

    }

    return (
        <div>
            <Col className="m-2 p-2 border-dark border-3 rounded-3 shadow-lg">
                <Card className="service" style={{ width: '100%' }}>
                    <Card.Img className="service-image" variant="top" src={image} />
                    <Card.Body >
                        <Card.Title className="text-center">{name}</Card.Title>
                        <small><b>Description:</b>{desc.slice(0, 100)}.</small>
                    </Card.Body>
                    <Button
                        onClick={handleServiceDetails}
                        className="btn-details"
                        variant="outline-success">Details</Button>
                </Card>
            </Col>

        </div>
    );
};

export default SingleService;