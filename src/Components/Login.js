
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
    
        // Retrieve user data from local storage
        const storedUserData = JSON.parse(localStorage.getItem('userData')) || [];
    
        // Check if the entered email and password match any user in local storage
        const user = storedUserData.find(user => user.email === email && user.password === password);
    
        if (!email || !password) {
            alert('All fields required');
        } else if (user) {
            // Redirect to the home page if credentials are correct
            navigate('/home');
        } else {
            alert('Email or Password is not correct!');
        }
    
        setEmail('');
        setPassword('');
    }

    return (
        <div className='container'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
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

                <button type='submit'>Login</button>
                <p>Dont have an account? <Link to={'/signup'}>Sign Up</Link> </p>
            </form>
        </div>
    );
}

export default Login;