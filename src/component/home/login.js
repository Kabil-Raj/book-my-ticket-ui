import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import App from "../../App";
import authenicationService from "../authentication/authentication.service";
import Header from "./header";
import MainHeader from "./main.header";
import Home from "./main.header";



export default function Login() {


    const [emailAddress, setUserCredential] = useState('');

    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('')

    const [isUserLogged, setIsUserLogged] = useState(false)

    const location = useLocation();

    const navigate = useNavigate();

    useEffect(() => {
        if (isUserLogged) {
            if(location.state?.from) {
                navigate(location.state.from)
            } else {
                navigate("/",{replace : true})
            }
        }
    },[isUserLogged])

    const login = (e) => {
        e.preventDefault();
        authenicationService.authenticateUser(emailAddress, password)
            .then(response => {
                (authenicationService.registerSessionStorage(emailAddress, response.data))
                setIsUserLogged(true)
            })
            .catch(error => {
                console.log(" Message " + error.response.data.description + " status code " + error.response.data.statusCode)
                setErrorMessage(error.response.data.description)
            })

    }


    const setEmail = (event) => {
        setErrorMessage('')
        setUserCredential(event.target.value)
    }

    const setPwd = (event) => {
        setErrorMessage('')
        setPassword(event.target.value)
    }
    return (
        <div>
            {!authenicationService.isUserLoggedIn() &&
                <div className="sign-in-container form-control border border-dark rounded">
                    {errorMessage &&
                        <Alert variant="danger">
                            <Alert.Heading>{errorMessage}</Alert.Heading>
                        </Alert>
                    }
                    <form onSubmit={login}>
                        <h3>Sign In</h3>
                        <div className="sign-in-bar">
                            <label className="sign-in-label">Email Address</label>
                            <input type="email" className="form-control" placeholder="Enter your email id" name="emailId" onChange={setEmail} required/>
                        </div>
                        <div className="sign-in-bar">
                            <label className="sign-in-label">Password</label>
                            <input type="password" className="form-control" placeholder="Enter your password" name="password" autoComplete="on" onChange={setPwd} required/>
                        </div>
                        <div className="sign-in-bar">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label sign-in-check-box" htmlFor="customCheck1">Remember Me</label>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary">
                                Sign In
                            </button>
                        </div>
                        <p className="forgot-password forgot-password-text">
                            Forgot <a href="#">password?</a>
                        </p>
                    </form>

                </div>
            }
        </div>
    )

}