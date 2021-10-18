import React from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import img1 from '../../images/newsroom-leadership.jpg'
import img2 from '../../images/newsroom-investor.jpg'
import img3 from '../../images/Corporate.jpg'

const About = () => {
    return (
        <Container className='my-5'>
            <h2 className='text-primary fw-bold fs-2 py-3'><span className='border-0 border-bottom border-3 border-primary'>About <span className="fs-2 fst-italic"><span className='fw-bold'> Comfey</span> <span className='fs-3'>LAB</span></span></span></h2>
            <h5 className="fs-5 lh-lg">We believe in harnessing science for human good. So whether you’re a provider, drug developer, <br /> hospital, medical researcher or patient—when you need trusted information to make clear, confident <br /> health decisions, consider us your source.</h5>

            <CardGroup className='mt-5'>
                <Card>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>Investor Relations</Card.Title>
                        <Card.Text>
                        Visit our investor hub to take a look at our financials, corporate governance, and more.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title>Executive Team</Card.Title>
                        <Card.Text>
                        Meet the leaders who help inform both our purpose and progress.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={img3} />
                    <Card.Body>
                        <Card.Title>Corporate Fact Sheet</Card.Title>
                        <Card.Text>
                        Who is Comfey Lab? Read our corporate fact sheet.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>

        </Container>
    );
};

export default About;