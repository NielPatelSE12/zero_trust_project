"use client"
import React, { useState } from "react";
import './alerts.css';
import Heading from "../drones/heading";

export default function Alerts() {
    const [showPopupAlerts, setShowPopupAddNewAlert] = useState(false);
    const [showPopupModifyAlert, setShowPopupModifyAlert] = useState(false);
    const [showPopupDeleteAlert, setShowPopupDeleteAlert] = useState(false);
    const [nameOfAlert, setNameOfAlert] = useState('');
    const [reason, setReason] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [status, setStatus] = useState('');

    function addNewAlert() {
        setShowPopupAddNewAlert(true);
    }

    function closeAddNewAlertPopup() {
        setShowPopupAddNewAlert(false);
    }

    function modifyAlert(){
        setShowPopupModifyAlert(true);
    }

    function closeModifyAlertPopup(){
        setShowPopupModifyAlert(false);
    }

    function deleteAlert(){
        setShowPopupDeleteAlert(true);
    }

    function closeDeleteAlertPopup(){
        setShowPopupDeleteAlert(false);
    }

    return (
        <>
            <Heading/>
            <br></br>
            <br></br>
            <div className='Alerts-Page'>
                <div className='Alert-Features'>
                    <h1> Alert Features </h1>  
                </div>
                <br></br>
                <div className='Alert-container'>
                    <div className='Add-New-Alert'>
                        <button className="Add-New-Alert-btn" onClick={addNewAlert}> ADD ALERT </button>
                </div>

                    {showPopupAlerts && (
                        <div className="popup" id="popup-1">
                            <div className="overlay" onClick={closeAddNewAlertPopup}></div>
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
                                <div className="close-btn" onClick={closeAddNewAlertPopup}>&times;</div>
                            </div>
                        </div>
                    )}
                    <br></br>
                    <div className='Modify-Alert'>
                        <button className = "modify-alert-btn" onClick ={modifyAlert}> MODIFY ALERT </button>
                    </div>

                    {showPopupModifyAlert && (
                        <div className="popup" id="popup-1">
                            <div className="overlay" onClick={closeModifyAlertPopup}></div>
                            <div className="content">
                                <div className="text-box-title"><h1>Modify Alert </h1></div>
                                <input type="text" placeholder="alert id" className="alert-id" onChange={(e) => {
                                    setNameOfAlert(e.target.value)
                                }}></input>
                                <input type="text" placeholder="name of alert" className="alert-name" onChange={(e) => {
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
                                <button className="modify-btn"><p>Modify</p></button>
                                <div className="close-btn" onClick={closeModifyAlertPopup}>&times;</div>
                            </div>
                        </div>
                    )}
                     <br></br>
                    <div className='Delete-Alert'>
                        <button className = "delete-alert-btn" onClick ={deleteAlert}> DELETE ALERT </button>
                    </div>
                    
                    {showPopupDeleteAlert && (
                        <div className="popup" id="popup-1">
                            <div className="overlay" onClick={closeDeleteAlertPopup}></div>
                            <div className="content">
                                <div className="text-box-title"><h1>Delete Alert </h1></div>
                                <br></br>
                                <input type="text" placeholder="alert id" className="alert-id" onChange={(e) => {
                                    setNameOfAlert(e.target.value)
                                }}></input>
                                <br></br><br></br><br></br>
                                <button className="delete-btn"><p>Delete</p></button>
                                <div className="close-btn" onClick={closeDeleteAlertPopup}>&times;</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
