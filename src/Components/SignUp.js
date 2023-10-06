
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();



    // This is for email validation.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // This is for checking whether the user email is already exists or not.
    const storedUserData = JSON.parse(localStorage.getItem('userData')) || [];
    const userExists = storedUserData.find(user => user.email === email);


    // here we are adding the new user to the userData array
    const newUser = { name, email, password };
    const updatedUserData = [...storedUserData, newUser];
    localStorage.setItem('userData', JSON.stringify(updatedUserData));

    function handleSubmit(e) {
        e.preventDefault();

        // This is a condition to make sure that all the fields are given otherwise alert the message.
        if (name === '' || email === '' || password === '') {
            alert('All fields are required');
        } else if (!emailRegex.test(email)) {
            alert('Invalid email format');

        } else if (userExists) {
            alert('Email is already registered');
        }else{


         // it will redirect to the login page
         navigate('/');

        // This is for clearing input fields after storing the user datas.
        setName('');
        setEmail('');
        setPassword('');

       
        }}

    return (
        <div className='container'>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Name</label>
                    <input
                        type='text'
                        placeholder='Enter Your Name'
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type='email'
                        placeholder='Enter Your Email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input
                        type='password'
                        placeholder='Enter Your Password'
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type='submit'>Sign Up</button>
                <p>Alredy Registered? <Link to={'/'}>Login</Link></p>
            </form>
        </div>
    );
}

export default SignUp;