"use client";
import React from "react";
import Link from "next/link";
import AccordionItem from "./AccordionItem";
import { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState(null);
  const toggle = (index) => {
    setOpen((prevOpen) => (prevOpen === index ? null : index));
  };
  const accordionData = [
    {
      title: "This is Drone title 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloremque nisi vel blanditiis reiciendis voluptatibus praesentium quaerat ut explicabo laboriosam, quae, nemo facilis, perspiciatis ipsa ratione eius possimus! Ea, laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloremque nisi vel blanditiis reiciendis voluptatibus praesentium quaerat ut explicabo laboriosam, quae, nemo facilis, perspiciatis ipsa ratione eius possimus! Ea, laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloremque nisi vel blanditiis reiciendis voluptatibus praesentium quaerat ut explicabo laboriosam,quae",
    },
    {
      title: "This is Drone title 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloremque nisi vel blanditiis reiciendis voluptatibus presentium quaerat ut explicabo laboriosam, quae, nemo facilis, perspiciatis ipsa ratione eius possimus! Ea, laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloremque nisi vel blanditiis reiciendis voluptatibus praesentium quaerat ut explicabo laboriosam, quae, nemo facilis, perspiciatis ipsa ratione eius possimus! Ea, laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloremque nisi vel blanditiis reiciendis voluptatibus praesentium quaerat ut explicabo laboriosam, quae, nemo facilis, perspiciatis ipsa ratione eius possimus! Ea, laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloremque nisi vel blanditiis reiciendis voluptatibus presentium quaerat ut explicabo laboriosam, quae, nemo facilis, perspiciatis ipsa ratione eius possimus! Ea, laborum.",
    },
    {
      title: "This is Drone title 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloremque nisi vel blanditiis reiciendis voluptatibus presentium quaerat ut explicabo laboriosam,quae, nemo facilis, perspiciatis ipsa ratione eius possimus! Ea, laborum.",
    },
  ];
  return (
    <div className="flex flex-col h-screen dark:bg-gradient-to-b dark:from-gray-900 dark:via-indigo-800 dark:to-gray-600 bg-gradient-to-b from-blue-900 via-blue-600 to-blue-200 text-white">
      {/* Temp Header: To be finalized*/}
      <header className="flex justify-between items-center py-4 px-8 border-b border-gray-200">
        <div className="flex items-center">
          <Link className="bg-white" href="/">
            <img src="/dronify.png" alt="Logo" className="h-8" />
          </Link>
        </div>
        <div className="text-lg font-bold p-5 flex items-center">
          <h1>Drones</h1>
        </div>
        <div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded shadow mr-2">
            Login
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex justify-center items-center">
        <div className="flex flex-col items-center w-[80%]">
          <button className="bg-green-500 text-white py-2 px-4 rounded shadow mt-2 mb-2 self-end">
            + Drone
          </button>
          <ul className="border rounded shadow-lg p-4 w-full ">
            {accordionData.map((data, index) => {
              return (
                <AccordionItem
                  key={index}
                  open={index === open}
                  title={data.title}
                  desc={data.desc}
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
