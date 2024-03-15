"use client";
import React from "react";
import { useState } from "react";
import './login.css'



const Login: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className="login-block">
            <div className="welcome">
                Welcome Back to Dronify
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
                <button className="login">Login</button>
                <br></br>
                <button className="sign-up">First Time? Sign Up Here</button>
            </div>
        </div>
    )
}


export default Login;