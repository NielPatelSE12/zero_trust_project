"use client"
import React, { useState } from "react";
import './alerts.css';

export default function Alerts() {
    const [showPopup, setShowPopup] = useState(false);
    const [nameOfAlert, setNameOfAlert] = useState('');
    const [reason, setReason] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [status, setStatus] = useState('');

    function addNewAlert() {
        setShowPopup(true);
    }

    function closePopup() {
        setShowPopup(false);
    }

    return (
        <div className='Alerts-Page'>
            <h1>Alerts Page</h1>
            <div className='Alert-Features'>
                <h1> Alert Features </h1>
            </div>

            <div className='Alert-container'>
                <div className='Add-New-Alert'>
                    <button className="Add-New-Alert-btn" onClick={addNewAlert}> ADD NEW ALERT </button>
                </div>

                {showPopup && (
                    <div className="popup" id="popup-1">
                        <div className="overlay" onClick={closePopup}></div>
                        <div className="content">
                            <div className="text-box-title"><h1>Add New Alert </h1></div>
                            <input type="text" placeholder="name of alert" className="name-of-alert" onChange={(e) => {
                                setNameOfAlert(e.target.value)
                            }}></input>
                            <input type="text" placeholder="reason" className="reason" onChange={(e) => {
                                setReason(e.target.value)
                            }}></input>
                            <input type="text" placeholder="error message" className="error-message" onChange={(e) => {
                                setErrorMessage(e.target.value)
                            }}></input>
                            <input type="text" placeholder="status" className="status" onChange={(e) => {
                                setStatus(e.target.value)
                            }}></input>
                            <br></br>
                            <button className="confirm-btn"><p>Confirm</p></button>
                            <div className="close-btn" onClick={closePopup}>&times;</div>
                        </div>
                    </div>
                )}

                <div className='Modify-Alert'>
                    <button> MODIFY ALERT </button>
                </div>

                <div className='Delete-Alert'>
                    <button> DELETE ALERT </button>
                </div>
            </div>
        </div>
    )
}
