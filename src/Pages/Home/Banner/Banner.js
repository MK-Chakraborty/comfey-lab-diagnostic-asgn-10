import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import img1 from '../../../images/Background.png';
import img2 from '../../../images/Background (2).png';
import img3 from '../../../images/Background (1).png';

const Banner = () => {
    return (
        <Container className='border-0 border-start border-end border-5 rounded border-primary my-5'>
            <Carousel variant="dark" fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-white'>
                        <h2>In Pursuit of Answers</h2>
                        <h5 className='d-none d-md-block'>From diagnostics to drug development, we’ll never stop working to move health forward—every day for everyone.</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2>Get Ahead of Your Health</h2>
                        <h5 className='d-none d-md-block'>Purchase your own health tests and get the answers <span className='text-light'> you need to help keep your wellness on track.</span></h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='fw-bold'>
                        <h2>Kid-Friendly COVID-19 Home Collection Kit</h2>
                        <h5 className='d-none d-md-block'>Back to school is upon us, and Pixel makes it easy <span className='text-light'> to get testing for children ages 2 and up.</span></h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Banner;