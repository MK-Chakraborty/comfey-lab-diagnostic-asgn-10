import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const EmployeeCount = () => {
    return (
        <Container>
            <h2 className='text-primary text-capitalize fs-2 py-5'>Our purpose drives our progress</h2>
            <Row>
                <Col xs={12} sm={12} md={6} lg={4}>
                    <div className="bg-primary text-white mx-auto d-flex align-items-center" style={{ width: '200px', height: '200px', borderRadius: '50%' }}>
                        <div className='mx-auto'>
                            <p>OVER</p>
                            <h1 className='fw-regular'>2,100</h1>
                        </div>
                    </div>
                    <h5 className='my-3 fw-light lh-lg'>Comfey Lab Team Members <br /> with either a Ph.D or M.D </h5>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4}>
                    <div className="bg-primary text-white mx-auto d-flex align-items-center" style={{ width: '200px', height: '200px', borderRadius: '50%' }}>
                        <div className='mx-auto'>
                            <p>THE TOP</p>
                            <h1 className='fw-regular'>50</h1>
                        </div>
                    </div>
                    <h5 className='my-3 fw-light lh-lg'>Drugs of 2019 developed <br /> with our support </h5>

                </Col>
                <Col xs={12} sm={12} md={6} lg={4}>
                    <div className="bg-primary text-white mx-auto d-flex align-items-center" style={{ width: '200px', height: '200px', borderRadius: '50%' }}>
                        <div className='mx-auto'>
                            <p>OVER</p>
                            <h1 className='fw-regular'>160 M</h1>
                        </div>
                    </div>
                    <h5 className='my-3 fw-light lh-lg'>Results provided to <br /> patients and their providers</h5>
                </Col>
            </Row>
        </Container>
    );
};

export default EmployeeCount;