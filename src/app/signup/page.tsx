"use client";
import React from "react";
import { useState } from "react";
import './signup.css'
import Heading from '../drones/heading'


const Signup: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (
        <>
            <Heading />
            <div className="login-block">
                <div className="welcome">
                    Welcome to Dronify
                </div>
                <div className="create">
                Create a new account
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
                        fetch('http://localhost:5000/signup', {
                            method: 'POST',
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify({username, password})
                        }).then(response => response.json().then(
                            thing => console.log(thing)))
                        console.log(12345)
                    }}>Sign Up</button>
                    <br></br>
                </div>
            </div>
        </>
    )
}


export default Signup;