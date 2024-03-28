"use client";
import React from "react";
import Link from "next/link";
import AccordionItem from "./AccordionItem";
import { useState } from "react";
import GetDroneData from "./getDroneData";
import { AiOutlinePlus } from "react-icons/ai";
import Heading from "./heading";

export default function Page() {
  const [droneData, setDroneData] = useState(GetDroneData);
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpen((prevOpen) => (prevOpen === index ? null : index));
  };

  {
    /* Backend replace title and desc with drone information  when adding or removing items in 
  accordion data make sure to also update the AccordionItem.tsx file */
  }
  return (
    <div className="flex flex-col h-screen dark:bg-gradient-to-b dark:from-gray-900 dark:via-indigo-800 dark:to-gray-600 bg-gradient-to-b from-blue-900 via-blue-600 to-blue-200 overflow-auto text-white">
      <Heading></Heading>
      {/* Main Content */}
      <main className="flex-1 flex justify-center items-center">
        <div className="flex flex-col items-center w-[80%]">
          <div className="flex content-end justify-between w-full">
            <p className="text-white py-2 pr-4 pl-1 my-2 text-xl">
              Drone List:
            </p>
            <Link href="/drones/DroneSettings">
              <button className="bg-green-500 text-white py-2 px-4 rounded shadow my-2 flex items-center">
                <AiOutlinePlus className="mr-1" /> Drone
              </button>
            </Link>
          </div>
          <ul className="border rounded shadow-lg p-4 w-full ">
            {droneData.map((data, index) => {
              return (
                <AccordionItem
                  key={index}
                  open={index === open}
                  toggle={() => toggle(index)}
                  theIndex={index}
                  droneData={droneData}
                  droneDatas={data}
                  setDroneData={setDroneData}
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
