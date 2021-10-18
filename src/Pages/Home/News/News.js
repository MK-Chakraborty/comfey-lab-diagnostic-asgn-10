import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import img from '../../../images/newsroom.png'

const News = () => {
    return (
        <Container className='my-5'>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} className='text-start p-5'>
                    <p className='text-primary'>N E W S R O O M</p>
                    <h3>Get the latest news about</h3>
                    <h3><span className='fw-bold fst-italic'> Comfey</span> <span className='fs-4 fst-italic'>LAB</span>, COVID-19, and more.</h3>
                    <h5 className='mt-4 fw-light'>Visit our newsroom to get the latest news and updates about our innovation, research and partnerships to improve health and improve lives around the world.</h5>
                    <Button variant="outline-primary" className='rounded-pill px-5 py-3 mt-3'>Details</Button>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <img src={img} className='w-100 pe-3' alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default News;