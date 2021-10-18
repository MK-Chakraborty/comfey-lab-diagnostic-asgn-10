import React from 'react';
import { Col, Container, Row, Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const SignUp = () => {

    const { signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home'

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    return (
        <Container>
            <Row>
                <Col xs={12} sm={12} md={8} lg={5} className="mx-auto">
                    <h1 className="fs-1 fst-italic my-5 text-primary"><i className="fas fa-clinic-medical"></i><span className='fw-bold'> Comfey</span> <span className='fs-2'>LAB</span> </h1>
                    <div className="border border-primary border-3 mb-5 p-3">
                        {/* <h3 className="text-start fs-3 lh-lg">Sign-In</h3>
                        <h6 className="text-start fs-6">Email</h6>
                        <input type="email" placeholder='email' className="w-100 p-2 border border-3 border-primary rounded-3" />
                        <h6 className="text-start fs-6 mt-3">Password</h6>
                        <input type="password" placeholder='password' className="w-100 p-2 border border-3 border-primary rounded-3" /> */}
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" className="fw-bold border-0 mt-3 w-100" type="submit">
                                Sign Up
                            </Button>
                        </Form>
                    </div>
                    <div className="border border-3 border-primary mb-5 p-3">
                        <h6 className="text-start fs-6">Have an Google Account?</h6>
                        <Button variant='primary'
                            onClick={handleGoogleSignIn}
                            className="fw-bold border-0 mt-3 w-100">Google Sign In</Button>
                    </div>
                    <div className="border-0 border-top border-3 mb-5 p-3">
                        <p>New To <h5 className="fs-5 fst-italic"><i className="fas fa-clinic-medical"></i><span className='fw-bold'> Comfey</span> <span className='fs-6'>LAB</span> </h5></p>
                        <Button
                            style={{ backgroundColor: "silver", padding: "5px 0" }}
                            className="text-dark fw-bold border-2 border-dark w-100">Sign Up</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;