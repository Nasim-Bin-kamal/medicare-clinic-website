import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import useServices from '../../../../hooks/useServices';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const history = useHistory();
    const [services] = useServices([]);
    const service = services?.find(service => service.id === serviceId);

    const handleBackToServices = () => {
        history.push('/home');
    }

    return (
        <div className="my-5">
            <Container className="w-75">
                <h3 className="my-5">Full Details of <span className="text-primary">{service?.name}</span></h3>
                <Row className="border border-3 rounded-3 shadow-lg">
                    <Col md={4}>
                        <Card className="mx-auto my-3">
                            <Card.Img className="img-fluid" variant="top" src={service?.image} />
                        </Card>
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <h3>Service Name: {service?.name}</h3>
                            <h4>Service Id: {service?.id}</h4>
                            <Card.Text>
                                <b>Service Description:</b> {service?.desc}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
                <Button
                    onClick={handleBackToServices}
                    className="mx-auto d-flex align-items-center my-3"
                    variant="outline-success"
                    size="md"
                ><i className="fas fa-arrow-left pe-2"></i>Back To Services</Button>
            </Container>


        </div>
    );
};

export default ServiceDetails;