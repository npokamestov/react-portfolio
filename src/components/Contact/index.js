import React, { useState } from 'react';

import './style.css'

import { validateEmail } from '../../utils/helpers';

const ContactForm = () => {

    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    };

    return (
        <section className='my-5'>
            <h1>Contact Me</h1>
            <div>
                <form id='contact-form' onSubmit={handleSubmit}>
                    <div className=''>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' name='name' defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' name='email' defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor='message'>Message:</label>
                        <textarea name='message' rows='10' defaultValue={message} onBlur={handleChange} />
                    </div>
                    {errorMessage && (
                            <div>
                                <p className='error-text'>{errorMessage}</p>
                            </div>
                        )}
                    <button className='button1' type='submit'>Submit</button>
                </form>
            </div>
        </section>
    )
}

export default ContactForm;