"use client";
import React from "react";
import { useState } from "react";
import './login.css';
import dronify from './dronify.png';
import Link from "next/link";
const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login-block">
            <div className="welcome">
                <h1>Welcome Back</h1>
                <img src={dronify.src} className="dronify"/>
            </div>
            <div className="input-block">
                <input type="text" placeholder="Username" className="username" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setUsername(e.target.value);
                }}></input>
                <br></br>
                <input type="password" placeholder="Password" className="password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPassword(e.target.value)
                }}></input>
                <br></br>
                <Link className="login" href="/login">Login</Link>
                <br></br>
                <div className="sign-up">
                    First time? Sign up <a href="/signup" className="here">here</a>
                </div>
            </div>
        </div>
    )
}


export default Login;