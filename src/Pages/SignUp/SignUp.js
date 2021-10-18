import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import initializeAuthentication from "../../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

initializeAuthentication();

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [isLogin, setIsLogin] = useState('');

    const { signInUsingGoogle, isLoading, setIsLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home'

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
            .finally(() => setIsLoading(false))
    }








    const auth = getAuth();

    const handleInputName = e => {
        setName(e.target.value);
    }

    const handleInputEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleInputPassword = (event) => {
        setPassword(event.target.value)
    }

    const toggleLogIn = e => {
        setIsLogin(e.target.checked);
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                setMessage('Your Account Has Been Created. You Can Sign In Now.')
                updateUserData();
                // verifyEmail();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const updateUserData = () => {
        updateProfile(auth.currentUser, { displayName: name })
    }

    const userSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                history.push(redirect_url);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const processRegisterUser = (event) => {
        event.preventDefault();
        if (password.length < 8) {
            setError('Password Must Contain Minimum 8 Charaters');
            return;
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/.test(password)) {
            setError('Password Must Contain At Least - 8 Characters - One Small Letter - One Capital Letter - One Number and - One Spacial Character. For Example ad%fQW2#6');
            return;
        }
        isLogin ? registerNewUser(email, password) : userSignIn(email, password);
    }











    return (
        <Container>
            <Row>
                <Col xs={12} sm={12} md={8} lg={5} className="mx-auto">
                    <h1 className="fs-1 fst-italic my-5 text-primary"><i className="fas fa-clinic-medical"></i><span className='fw-bold'> Comfey</span> <span className='fs-2'>LAB</span> </h1>
                    <div className="border border-primary border-3 rounded-3 mb-5 p-3">
                        <form onSubmit={processRegisterUser}>
                            {isLogin ? <h4 className='text-primary fs-4 px-3'>Sign Up</h4> : <h4 className='text-primary fs-4 px-3'>Sign In</h4>}
                            {isLogin && <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                <input type="text" onBlur={handleInputName} className="form-control" id="exampleInputName" placeholder='name' aria-describedby="emailHelp" required />
                            </div>}
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" onBlur={handleInputEmail} className="form-control" id="exampleInputEmail1" placeholder='email' aria-describedby="emailHelp" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" onBlur={handleInputPassword} className="form-control" id="exampleInputPassword1" placeholder='password' required />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" onChange={toggleLogIn} className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">New To Comfey Lab ?</label>
                            </div>
                            <div className="col-md-12">
                                <h6 className="text-danger fs-6 lh-lg">{error}</h6>
                                <h6 className="text-success fs-6 lh-lg">{message}</h6>
                            </div>
                            <button type="submit" className="btn btn-primary fw-bold w-100">Sign {isLogin ? 'Up' : 'In'}</button>
                        </form>
                    </div>
                    <div className="border border-3 border-primary rounded-3 mb-5 p-3">
                        <h6 className="text-start fs-6">Have an Google Account?</h6>
                        <Button variant='primary'
                            onClick={handleGoogleSignIn}
                            className="fw-bold border-0 mt-3 w-100">Google Sign In</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;