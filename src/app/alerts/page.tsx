"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import AccordionItem from "./AccordionItem";
import { AiOutlinePlus } from "react-icons/ai";
import Heading from "./heading";

interface Alert {
    id: number;
    nameofAlert: string;
    reason: string;
    errorMessage: string;
    status: string;
  }

export default function Alerts() {
   
    const [alerts,setAlerts] = useState<Alert[]>([]);
    const [open, setOpen] = useState<number | null>(null);
    
    // Input Variables
    const [nameOfAlert, setNameOfAlert] = useState('');
    const [reason, setReason] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [status, setStatus] = useState('');
    const [alertID, setAlertID] = useState('')
    const [error, setError] = useState('');

    // Connecting to database

    // Get all alerts
    const getAllAlerts = async () =>{
        await fetch('/api/getAllAlerts', {
            method: 'GET', // Add a new alert to the database
            headers: {'Content-Type': 'application/json'},
        }).then(response => response.json().then())
    }
    
    useEffect(() => {
        fetch('/api/getAllAlerts')
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setAlerts(data)
        })
          .catch(error => console.error('Error fetching alerts:', error));
      }, []);

    // Add Alert
    const handleAddAlert = async () => {
        await fetch('/api/alert/createAlert', {
            method: 'POST', // Add a new alert to the database
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({nameOfAlert,reason,errorMessage,status})
        }).then(response => response.json().then())
    }

    // Modify Alert
    const handleModifyAlert = async () => {
        await fetch('/api/alert', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({nameOfAlert,reason,errorMessage,status})
        }).then(response => response.json().then())
    }

    // Delete Alert
    const handleDeleteAlert = async (alertID) => {
        await fetch('/api/alert/{id}', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({alertID})
        }).then(response => response.json().then())
    }

    const toggle = (index: number) => {
      setOpen((prevOpen) => (prevOpen === index ? null : index));
    };

        return (
            <div className="flex flex-col h-screen dark:bg-gradient-to-b dark:from-gray-500 dark:via-yellow-200 dark:to-gray-400 bg-gradient-to-b from-yellow-900 via-yellow-200 to-yellow-200 overflow-auto text-black">
              <Heading />
              <main className="flex-1 flex justify-center items-center">
                <div className="flex flex-col items-center w-[80%]">
                  <div className="flex content-end justify-between w-full">
                    <p className="text-white py-2 pr-4 pl-1 my-2 text-xl">
                    </p>
                    <Link href="/alerts/alertEdit">
                      <button className="bg-green-500 text-white py-2 px-4 rounded shadow my-2 flex items-center">
                        <AiOutlinePlus className="mr-1" /> Alert
                      </button>
                    </Link>
                  </div>
              
                  <ul className="border rounded shadow-lg p-4 w-full">   
                    {alerts.map((alert, index) => (
                      <li key={alert.id} className="mb-4">
                        <AccordionItem
                         open={index === open}
                         toggle={() => toggle(index)}
                         theIndex={index}
                         alertData={alerts}
                         alertDatas={alert}
                         setAlertData={setAlerts}
                        />
                      </li>   
                    ))}
                  </ul>
                </div>
              </main>
            </div>
          );
}
