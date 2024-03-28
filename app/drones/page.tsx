"use client";
import React from "react";
import Link from "next/link";
import AccordionItem from "./AccordionItem";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import GetDroneData from "./getDroneData";
import { AiOutlinePlus } from "react-icons/ai";

{
  /* Logic for Accordion list  */
}
export default function Page() {
  const [droneData, setDroneData] = useState(GetDroneData);
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpen((prevOpen) => (prevOpen === index ? null : index));
  };

  const toggleMenu = () => {
    setOpen(!open);
    const navbarDefault = document.getElementById("navbar-default");
    if (navbarDefault) {
      if (open) {
        navbarDefault.classList.add("hidden");
      } else {
        navbarDefault.classList.remove("hidden");
      }
    }
  };

  {
    /* Backend replace title and desc with drone information  when adding or removing items in 
  accordion data make sure to also update the AccordionItem.tsx file */
  }
  return (
    <div className="flex flex-col h-screen dark:bg-gradient-to-b dark:from-gray-900 dark:via-indigo-800 dark:to-gray-600 bg-gradient-to-b from-blue-900 via-blue-600 to-blue-200 text-white">
      <nav className="bg-white/20 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="dronify.png"
              className="h-8 dark:invert"
              alt="Dronify Logo"
            />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/alerts"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Alerts
                </Link>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Location
                </a>
              </li>
              <li>
                <a
                  href="/users"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Users
                </a>
              </li>
              <li>
                <Link
                  href="Login"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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
