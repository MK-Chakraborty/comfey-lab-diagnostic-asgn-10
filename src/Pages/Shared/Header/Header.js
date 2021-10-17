import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Container fluid className='px-0'>
                <Navbar bg="primary" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home"><h5 className="fs-5 fst-italic"><i className="fas fa-clinic-medical"></i><span className='fw-bold'> Comfey</span> <span className='fs-6'>LAB</span> </h5></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto nav-menu">
                                <NavLink to="/home" className='text-white pe-3 text-decoration-none fw-bold'><h6>Home</h6></NavLink>
                                <NavLink to="/home" className='text-white pe-3 text-decoration-none fw-bold'><h6>Link</h6></NavLink>
                                <NavLink to="/home" className='text-white pe-3 text-decoration-none fw-bold'><h6>Home</h6></NavLink>
                                <NavLink to="/link" className='text-white pe-3 text-decoration-none fw-bold'><h6>Link</h6></NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </Container>
    );
};

export default Header;