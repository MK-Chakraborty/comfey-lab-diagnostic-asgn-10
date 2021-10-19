import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import img from '../../images/pageNotFound.jpg'

const NotFound = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/home')
    }
    return (
        <Container className='mt-5'>
            <img className="w-100" src={img} alt="" />
            <h2 className="text-primary fw-light lh-lg py-3">Seems like you have lost. The page you are searching for in not avaiable. We Suggest you to go back to home page and start again.</h2>
            <Button onClick={handleClick} className="my-5 py-3 px-5 fs-3 rounded-pill" variant="primary"> <i className="fas fa-arrow-left"></i> GO BACK <i className="fas fa-home"></i></Button>
        </Container>
    );
};

export default NotFound;