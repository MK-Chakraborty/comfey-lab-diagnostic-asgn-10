import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <Container fluid className='bg-primary mt-5 py-5'>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={3} className="text-white text-start d-flex align-items-center pb-5">
                        <div>
                            <h4 className="fs-4 fst-italic"><i className="fas fa-clinic-medical"></i><span className='fw-bold'> Comfey</span> <span className='fs-5'>LAB</span> </h4>
                            <h6><i className="far fa-copyright"></i> All Rights Reserved</h6>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3} className="text-white text-start pb-5">
                        <h5>FAQs</h5>
                        <ul style={{ listStyleType: 'none' }} className='ps-0'>
                            <li>
                                <NavLink to='/home'><p className='text-white'>Labs</p></NavLink>
                            </li>
                            <li>
                                <NavLink to='/home'><p className='text-white'>Test Results</p></NavLink>
                            </li>
                            <li>
                                <NavLink to='/home'><p className='text-white'>All Patient</p></NavLink>
                            </li>
                            <li>
                                <NavLink to='/home'><p className='text-white'>All Provider</p></NavLink>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3} className="text-white text-start pb-5">
                        <h5>Quick Links</h5>
                        <ul style={{ listStyleType: 'none' }} className='ps-0'>
                            <li>
                                <NavLink to='/home'><p className='text-white'>Drug Development</p></NavLink>
                            </li>
                            <li>
                                <NavLink to='/home'><p className='text-white'>Drug Testing</p></NavLink>
                            </li>
                            <li>
                                <NavLink to='/home'><p className='text-white'>Paternity Testing</p></NavLink>
                            </li>
                            <li>
                                <NavLink to='/home'><p className='text-white'>Pixel by Comfey Lab</p></NavLink>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3} className="text-white text-start pb-5">
                        <h5>Contact Us</h5>
                        <ul style={{ listStyleType: 'none' }} className='ps-0'>
                            <li>
                                <NavLink to='/home'><p className='text-white'>Patient</p></NavLink>
                            </li>
                            <li>
                                <NavLink to='/home'><p className='text-white'>Provider</p></NavLink>
                            </li>
                        </ul>
                        <ul style={{ listStyleType: 'none' }} className='d-flex justify-content-between ps-0'>
                            <li>
                                <NavLink to='/home'><h5 className='text-white'><i className="fab fa-facebook-f"></i></h5></NavLink>
                            </li>
                            <li>
                                <NavLink to='/home'><h5 className='text-white'><i className="fab fa-twitter"></i></h5></NavLink>
                            </li>
                            <li>
                                <NavLink to='/home'><h5 className='text-white'><i className="fab fa-linkedin-in"></i></h5></NavLink>
                            </li>
                            <li>
                                <NavLink to='/home'><h5 className='text-white'><i className="fab fa-youtube"></i></h5></NavLink>
                            </li>
                            <li>
                                <NavLink to='/home'><h5 className='text-white'><i className="fab fa-instagram"></i></h5></NavLink>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Footer;