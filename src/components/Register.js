import React, { useState } from 'react';
import { Navbar,NavbarBrand } from 'react-bootstrap'

import './style.css'
function RegistrationForm() {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "firstName") {
            setFirstName(value);
        }
        if (id === "lastName") {
            setLastName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "confirmPassword") {
            setConfirmPassword(value);
        }

    }

    const handleSubmit = () => {
        console.log(firstName, lastName, email, password, confirmPassword);
    }

    return (
        <div>
            <Navbar style={{ height: '60px', width: '100%' }}>
                <NavbarBrand href="#home" style={{ color: '#444BAB', fontSize: '22px', fontWeight: 'bold', position: 'relative', left: '600px' }}><img alt="logo" src={"/images/bplogo.png"} width="45" height="45" /> programing pathashala</NavbarBrand>
            </Navbar>
            <hr style={{ marginTop: '0px' }} />
            <div className="form">
                <div className="form-body">
                    <div className="username">
                        <label className="form__label" for="firstName">First Name </label>
                        <input className="form__input" type="text" value={firstName} onChange={(e) => handleInputChange(e)} id="firstName" placeholder="First Name" />
                    </div>
                    <div className="lastname">
                        <label className="form__label" for="lastName">Last Name </label>
                        <input type="text" name="" id="lastName" value={lastName} className="form__input" onChange={(e) => handleInputChange(e)} placeholder="LastName" />
                    </div>
                    <div className="email">
                        <label className="form__label" for="email">Email </label>
                        <input type="email" id="email" className="form__input" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" />
                    </div>
                    <div className="password">
                        <label className="form__label" for="password">Password </label>
                        <input className="form__input" type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Password" />
                    </div>
                    <div className="confirm-password">
                        <label className="form__label" for="confirmPassword">Confirm Password </label>
                        <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => handleInputChange(e)} placeholder="Confirm Password" />
                    </div>
                </div>
                <div class="footer">
                    <button onClick={() => handleSubmit()} type="submit" class="rbtn">Register</button>
                </div>
            </div>
        </div>

    )
}

export default RegistrationForm