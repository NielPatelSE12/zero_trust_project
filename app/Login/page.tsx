"use client";
import React from "react";
import { useState } from "react";
import './login.css';
import dronify from './dronify.png'
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        }).then(response => response.json().then(
            thing => {
                if (thing === 'valid'){
                    router.push('/location')
                }
            else{
                router.push('/signup')
            }}
                ))
    }

    return (
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
                </div>
            </div>
        </div>
    )
}


export default Login;