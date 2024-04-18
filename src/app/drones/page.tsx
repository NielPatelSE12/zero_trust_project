"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import AccordionItem from "./AccordionItem";
import { AiOutlinePlus } from "react-icons/ai";
import Heading from "./heading";



interface Drone {
  id: number;
  name: string;
  model: string;
  make: string;
  serialNumber: number;
  batteryLife: number;
  topSpeed: number;
}

export default function Page() {
  const [open, setOpen] = useState<number | null>(null);
  const [drones, setDrones] = useState<Drone[]>([]);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    
    console.log('on fetch ' + token);
    fetch('/api/getAllDrones', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => setDrones(data))
      .catch(error => console.error('Error fetching drones:', error));
  }, []);

  console.log(drones);

  const toggle = (index: number) => {
    setOpen((prevOpen) => (prevOpen === index ? null : index));
  };

  return (
    <div className="flex flex-col h-screen dark:bg-gradient-to-b dark:from-gray-900 dark:via-indigo-800 dark:to-gray-600 bg-gradient-to-b from-blue-900 via-blue-600 to-blue-200 overflow-auto text-white">
      <Heading />
      <main className="flex-1 flex justify-center items-center">
        <div className="flex flex-col items-center w-[80%]">
          <div className="flex content-end justify-between w-full">
            <p className="text-white py-2 pr-4 pl-1 my-2 text-xl">
              
            </p>
            <Link href="/drones/droneEdit">
              <button className="bg-green-500 text-white py-2 px-4 rounded shadow my-2 flex items-center">
                <AiOutlinePlus className="mr-1" /> Drone
              </button>
            </Link>
          </div>
          <ul className="border rounded shadow-lg p-4 w-full">
            {drones.map((drone, index) => (
              <li key={drone.id} className="mb-4">
                <AccordionItem
                  open={index === open}
                  toggle={() => toggle(index)}
                  theIndex={index}
                  droneData={drones}
                  droneDatas={drone}
                  setDroneData={setDrones}
                />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
