import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import FormInput from './FormInput';
import "./bookMyTicket-form.css"
import authenticationService from '../../api/authentication-service';


export default class SignUp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            emailAddress: '',
            dateOfBirth: '',
            contactNumber: '',
            password: '',
            confirmPassword: '',
        }

        this.handleSingUp = this.handleSingUp.bind(this)
    }


    handleSingUp = (event) => {
        event.preventDefault();
            authenticationService.saveUserRegistration(this.state)
            .then(response => {
                if (response.status === 200) {
                    this.setState({
                        isRegistrationSuccessful: true
                    })
                }
            })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
       const inputs = [
            {
                id : 1,
                name : "username",
                type : "text",
                placeholder : "Username",
                errormessage : " Username should be 3-8 characters and should not include any special characters",
                label : "Username",
                pattern : `^[A-Za-z0-9]{3,8}$`,
                required : true
            },
            {
                id : 2,
                name : "emailAddress",
                type : "email",
                placeholder : "Email",
                errormessage : "It should be a valid email address",
                label : "Email",
                required : true
            },
            {
                id : 3,
                name : "dateOfBirth",
                type : "date",
                placeholder : "Birthday",
                label : "Birthday"
            },
            {
                id : 4,
                name : "contactNumber",
                type : "tel",
                placeholder : "Contact",
                errormessage : "Enter valid phone number",
                label : "Contact",
                pattern : `^[0-9]{10}$`,
                required : true
            },
            {
                id : 5,
                name : "password",
                type : "password",
                placeholder : "Password",
                errormessage : "Password should be 8-10 characters and include at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character!",
                pattern: `^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,10}$`,
                label : "Password",
                required : true
            },
            {
                id : 6,
                name : "confirmPassword",
                type : "password",
                placeholder : "Confirm Password",
                errormessage : "Password does not match",
                pattern: this.state.password,
                label : "Confirm Password",
                required : true
            },
        ]

        return (
            <div className='sign-up-container form-control border border-dark rounded'>
                {this.state.isRegistrationSuccessful &&
                    <Alert className="signup-alert" variant='success'>
                        <Alert.Heading>Registration Successful</Alert.Heading>
                    </Alert>}
                <form onSubmit={this.handleSingUp}>
                    <h1>Sign Up</h1>
                        <div className="sign-up-bar">
                        {inputs.map((input) => {
                            return <FormInput  
                            key={input.id}
                            {...input}
                            value={this.state[input.name]}
                            onChange={this.handleChange}
                            />
                    })}
                    </div>
                    <button type="submit" className='btn btn-primary register-btn'>Register</button>
                </form>
            </div>


        )
    }
}

