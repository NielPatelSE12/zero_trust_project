"use client";
import React from "react";
import { useState } from "react";
import './signup.css'
import Heading from '../drones/heading'
import { useRouter } from "next/navigation";

const Signup: React.FC = () => {
    const router = useRouter();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
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
                            thing => {
                                if (thing.message === "User with this username already exists"){
                                    setError("User with this username already exists")
                                }
                                else{
                                    router.push('/location')
                                }
                            }
                        )))
                    }}>Sign Up</button>
                    {error && <h1 className="error">{error}</h1>}
                    <br></br>
                </div>
            </div>
        </>
    )
}


export default Signup;