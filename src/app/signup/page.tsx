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
                        fetch('/api/NewUser', {
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                              },
                            method: "POST",
                            body: JSON.stringify({username, password})
                        }).then(response => (response.json().then(
                            thing => console.log(thing)
                        )))
                    }}>Sign Up</button>
                    <br></br>
                </div>
            </div>
        </>
    )
}


export default Signup;