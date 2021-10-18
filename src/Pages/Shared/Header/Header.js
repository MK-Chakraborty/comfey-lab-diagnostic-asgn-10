import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Container fluid className='px-0'>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><h5 className="fs-5 fst-italic"><i className="fas fa-clinic-medical"></i><span className='fw-bold'> Comfey</span> <span className='fs-6'>LAB</span> </h5></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto nav-menu">
                            {user.email ? <p className="text-white mx-3">Hello, <span className="text-white fw-bold">{user.displayName}</span></p>: <p className='text-primary'>User</p>}
                            <NavLink to="/home" className='text-white pe-3 text-decoration-none fw-bold'><h6>Home</h6></NavLink>
                            <NavLink to="/about" className='text-white pe-3 text-decoration-none fw-bold'><h6>About</h6></NavLink>
                            <NavLink to="/faq" className='text-white pe-3 text-decoration-none fw-bold'><h6>FAQs</h6></NavLink>
                            {
                                user.email ?
                                    <Button variant='light' size="sm"
                                        onClick={logOut}
                                        className="fw-bold border-0 d-block mb-2 ms-3">Sign Out</Button>
                                    : <NavLink to="/signup" className='text-white pe-3 text-decoration-none fw-bold'><h6>Sign In/ Sign Up</h6></NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;

// {
//     user.email ? <div className="text-start">
//         <p className="text-white mb-1">Hello, <span className="text-warning">{user.displayName}</span></p>
//         <Button
//             onClick={logOut}
//             style={{ backgroundImage: "linear-gradient(#ffd772, #dfa000)", padding: "5px 30px" }}
//             className="text-dark fw-bold border-0 d-block mb-2">Sign Out</Button>
//     </div> :
//         <div className="text-start">
//             <p className="text-white mb-1">Hello, Sign In</p>
//             <Button
//                 onClick={handleSignIn}
//                 style={{ backgroundImage: "linear-gradient(#ffd772, #dfa000)", padding: "5px 30px" }}
//                 className="text-dark fw-bold border-0 d-block mb-2">Sign In</Button>
//         </div>
// }