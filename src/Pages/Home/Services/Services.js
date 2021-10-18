import React from 'react';
import { Container } from 'react-bootstrap';
import useService from '../../../Hooks/useService';
import Service from './Service/Service';

const Services = () => {
    const services = useService();
    return (
        <Container>
            <h2 className='text-primary fw-bold fs-2 py-3'><span className='border-0 border-bottom border-3 border-primary'>Our Services</span></h2>
            <div className='d-flex flex-wrap justify-content-around'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </Container>
    );
};

export default Services;