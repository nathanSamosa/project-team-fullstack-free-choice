import React, { useState } from 'react';

import { postFormToServer } from '../utils/auth';

import './styling/register.css';

export const Register = (props) => {
    const { setIsLoggedIn, setFormToRender } = props;

    const initialForm = {
        username: '',
        email: '',
        password: '',
    };

    const [form, setForm] = useState(initialForm);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async () => {
        event.preventDefault();

        const result = await postFormToServer('url');

        localStorage.setItem('token', result.token);

        setIsLoggedIn(true);
    };

    const handleRedirect = () => setFormToRender('login');

    const handleClose = () => setFormToRender('');

    return (
        <section className="app-welcomeform">
            <section className="welcomeform-container">
                <div className="welcomeform-aside">
                    <h1>Register</h1>
                    <h2>Have an account?</h2>
                    <button
                        className="welcomeform-button welcomeform-redirect-button"
                        onClick={handleRedirect}
                    >
                        Login
                    </button>
                </div>
                <form className="welcomeform-form">
                    <div className="welcomeform-close-button" onClick={handleClose}><h4>X</h4></div>
                    <input
                        className="welcomeform-form-input"
                        name="username"
                        type="text"
                        placeholder="Enter Username"
                        value={form.username}
                        required
                        onChange={handleChange}
                    />
                    <input
                        className="welcomeform-form-input"
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                        value={form.password}
                        required
                        onChange={handleChange}
                    />
                    <input
                        className="welcomeform-form-input"
                        name="email"
                        type="text"
                        placeholder="Enter Email"
                        value={form.email}
                        required
                        onChange={handleChange}
                    />
                    <button
                        className="welcomeform-button welcomeform-submit-button"
                        onClick={handleSubmit}
                    >
                        Register
                    </button>
                </form>
            </section>
        </section>
    );
};
