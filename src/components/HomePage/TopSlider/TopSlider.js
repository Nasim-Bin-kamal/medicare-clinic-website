import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './TopSlider.css';

const TopSlider = () => {
    return (
        <div>
            <Carousel className="carousel" interval={1000}>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid"
                        src="https://i.ibb.co/5MTPXN4/b1.png"
                        alt="First slide"
                    />
                    <Carousel.Caption className="desc">
                        <h1 className="banner-title">Qualified Expert Doctors</h1>
                        <p className="text-dark">Our doctors are specialized in all the areas.</p>
                        <Button className="btn-standard border-0 py-2" variant="primary px-4 rounded-pill">Read More <i className="fas fa-plus"></i></Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <img
                        className="d-block img-fluid"
                        src="https://i.ibb.co/zPqXTJS/b2.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption className="desc">
                        <h1 className="banner-title">Modern Diagnostic</h1>
                        <p className="text-dark">All kinds of diagnostic equipment are availabe.</p>
                        <Button className="btn-standard border-0 py-2" variant="primary px-4 rounded-pill">Read More <i className="fas fa-plus"></i></Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid"
                        src="https://i.ibb.co/r5ysv84/b3.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption className="desc">
                        <h1 className="banner-title">The Heights Standards</h1>
                        <p className="text-dark">Maintain heights standard technologies for patients.</p>
                        <div>
                            <Button className="btn-standard border-0 py-2" variant="primary px-4 rounded-pill">Read More <i className="fas fa-plus"></i></Button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default TopSlider;