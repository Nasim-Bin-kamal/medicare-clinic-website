import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import SingleService from '../SingleService/SingleService';

const Services = () => {
    const [services] = useServices([]);
    return (
        <div className="my-5">
            <Container>
                <h2 className="text-center my-3 text-uppercase text-secondary" >Services</h2>
                <Row xs={1} md={2} lg={3}>
                    {
                        services?.map(service => <SingleService service={service} key={service.id}></SingleService>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Services;