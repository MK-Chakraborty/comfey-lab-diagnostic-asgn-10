import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const { id } = useParams();
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/detailData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const service = services.find(service => service.id == id)

    return (
        <Container>
            <h2 className='text-primary fw-bold fs-2 py-3'><span className='border-0 border-bottom border-3 border-primary'>{service?.title}</span></h2>

            <Card style={{ width: '100%' }} className='my-5'>
                <Card.Img variant="top" src={service?.img} />
                <Card.Body>
                    <Card.Text>
                        <h5 className='lh-lg text-primary'>{service?.desp}</h5>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-primary">
                    <h4 className='lh-lg text-white text-bold'>Service Charge: {service?.fee} $</h4>
                </Card.Footer>
            </Card>
        </Container>
    );
};

export default ServiceDetail;