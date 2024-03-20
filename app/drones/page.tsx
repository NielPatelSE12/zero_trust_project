"use client";
import React from "react";
import Link from "next/link";
import AccordionItem from "./AccordionItem";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import DroneData from "./DroneData";
{
  /* Logic for Accordion list  */
}
export default function Page() {
  const droneData = DroneData();
  const [open, setOpen] = useState(null);
  const toggle = (index) => {
    setOpen((prevOpen) => (prevOpen === index ? null : index));
  };

  {
    /* Backend replace title and desc with drone information  when adding or removing items in 
  accordion data make sure to also update the AccordionItem.tsx file */
  }
  return (
    <div className="flex flex-col h-screen dark:bg-gradient-to-b dark:from-gray-900 dark:via-indigo-800 dark:to-gray-600 bg-gradient-to-b from-blue-900 via-blue-600 to-blue-200 text-white">
      {/* Temp Header: To be finalized*/}
      <header className="outline flex justify-between items-center py-5 px-8 border-b border-gray-200">
        <div className="bg-white">
          <Link href="/">
            <img src="/dronify.png" alt="Logo" className="h-8" />
          </Link>
        </div>
        <div className="text-lg font-bold">
          <h1>Drones</h1>
        </div>
        <div>
          <RxHamburgerMenu className="text-2xl" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex justify-center items-center">
        <div className="flex flex-col items-center w-[80%]">
          <Link href="/drones/DroneSettings" className="self-end">
            <button className="bg-green-500 text-white py-2 px-4 rounded shadow mt-2 mb-2">
              + Drone
            </button>
          </Link>
          <ul className="border rounded shadow-lg p-4 w-full ">
            {droneData.map((data, index) => {
              return (
                <AccordionItem
                  key={index}
                  open={index === open}
                  DroneName={data.DroneName}
                  DroneModel={data.DroneModel}
                  DroneMake={data.DroneMake}
                  DroneSerialNumber={data.DroneSerialNumber}
                  DroneBatteryLife={data.DroneBatteryLife}
                  DroneTopSpeed={data.DroneTopSpeed}
                  toggle={() => toggle(index)}
                />
              );
            })}
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 px-8 border-t border-gray-200"></footer>
    </div>
  );
}
