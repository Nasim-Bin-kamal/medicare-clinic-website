import React from 'react';
import './Contact.css';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Col, Container, Row } from 'react-bootstrap';


const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    const { user } = useAuth();
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center flex-column contact-banner">
                <h1 className="text-uppercase fw-bold header text-center mx-3">Contact Us</h1>
                <h4 className=" header text-center mx-3">If You Want To Contact Us Please Fill the Form First</h4>
            </div>
            <Container>
                <Row xs={1} md={1} lg={1} className="d-flex align-items-center justify-content-center mx-auto">

                    <Col xs={12} md={8} lg={8}>
                        <div className="contact-form p-1 my-5">
                            <form className="mx-auto d-flex justify-content-center align-items-center flex-column my-5" onSubmit={handleSubmit(onSubmit)}>
                                <h3 className="text-white text-uppercase my-3">Contact Form</h3>
                                <input className="form-control my-2 border-warning w-75" type="text" placeholder="First name" defaultValue={user?.displayName} {...register("Full name", { required: true, maxLength: 80 })} />
                                <input className="form-control my-2 border-warning w-75" type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} />
                                <input className="form-control my-2 border-warning w-75" type="text" placeholder="Email" defaultValue={user?.email} {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                                <input className="form-control my-2 border-warning w-75" type="text" placeholder="Address" {...register("Address", {})} />
                                <input className="form-control my-2 border-warning w-75" type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, max: 11, maxLength: 11 })} />
                                {errors.Email && <span className="text-danger">This field is required</span>}

                                <input className="btn-submit my-3 px-5 fw-bold" type="submit" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Contact;