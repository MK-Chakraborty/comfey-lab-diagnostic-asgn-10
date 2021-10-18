import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Service = ({service}) => {
    return (
        <Card style={{ width: '24rem' }} className='my-5'>
            <Card.Img variant="top" src={service.img} />
            <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>
                    {service.desp.slice(0,200)} ...
                </Card.Text>
                <Button variant="primary">Appointment</Button>
            </Card.Body>
        </Card>
    );
};

export default Service;