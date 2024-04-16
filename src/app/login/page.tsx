"use client";
import React from "react";
import { useState } from "react";
import './login.css';
import dronify from './dronify.png'
import { useRouter } from "next/navigation";
import Heading from '../drones/heading'

const Login: React.FC = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        await fetch('/api/userLogin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        }).then(response => response.json().then(
            thing => {
                console.log(thing)
                if (thing.message === 'Login successful'){
                    sessionStorage.setItem('token', thing.token);
                    router.push('/location');
                }
                else if (thing.message === 'Incorrect password'){
                    setError('Incorrect password');
                }
                else{
                    setError('Sorry, we could not find that user');
                    // pass
                }}
                ))
    }

    return (
        <>
            <Heading/>
            <div className="login-block">
                <div className="welcome">
                    <h1>Welcome Back</h1>
                    <img src={dronify.src} className="dronify"/>
                </div>
                <div className="input-block">
                    <input type="text" placeholder="Username" className="username" onChange={(e) => {
                        setUsername(e.target.value);
                    }}></input>
                    <br></br>
                    <input type="password" placeholder="Password" className="password" onChange={(e) => {
                        setPassword(e.target.value)
                    }}></input>
                    <br></br>
                    <button className="login" onClick={() => {
                        handleLogin();
                    }}>Login</button>
                    <br></br>
                    <div className="sign-up">
                        First time? Sign up <a href="/signup" className="here">here</a>
                        {error && <h1 className="error">{error}</h1>}
                    </div>
                </div>
            </div>
        </>
    )
}


export default Login;