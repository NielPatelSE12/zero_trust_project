import React from "react";
import Link from "next/link";
import AccordionItem from "./AccordionItem";

export default function Page() {
  const accordionData = [
    {
      title: "This is demo title 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloremque nisi vel blanditiis reiciendis voluptatibus praesentium quaerat ut explicabo laboriosam, quae, nemo facilis, perspiciatis ipsa ratione eius possimus! Ea, laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloremque nisi vel blanditiis reiciendis voluptatibus praesentium quaerat ut explicabo laboriosam, quae, nemo facilis, perspiciatis ipsa ratione eius possimus! Ea, laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloremque nisi vel blanditiis reiciendis voluptatibus praesentium quaerat ut explicabo laboriosam,quae",
    },
    {
      title: "This is demo title 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloremque nisi vel blanditiis reiciendis voluptatibus presentium quaerat ut explicabo laboriosam, quae, nemo facilis, perspiciatis ipsa ratione eius possimus! Ea, laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloremque nisi vel blanditiis reiciendis voluptatibus praesentium quaerat ut explicabo laboriosam, quae, nemo facilis, perspiciatis ipsa ratione eius possimus! Ea, laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloremque nisi vel blanditiis reiciendis voluptatibus praesentium quaerat ut explicabo laboriosam, quae, nemo facilis, perspiciatis ipsa ratione eius possimus! Ea, laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloremque nisi vel blanditiis reiciendis voluptatibus presentium quaerat ut explicabo laboriosam, quae, nemo facilis, perspiciatis ipsa ratione eius possimus! Ea, laborum.",
    },
    {
      title: "This is demo title 3",
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
          {accordionData.map((data, index) => {
            return <AccordionItem />;
          })}
          <ul className="border rounded shadow-lg p-4 w-full ">
            <li className="flex justify-between items-center mb-2">
              <span>Drone 1</span>
              <div className="flex items-center">
                <span className="mr-2">Battery</span>
                <button className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                  {/* Three dots icon */}
                  <i className="fa-sharp fa-regular fa-chevron-down"></i>
                </button>
              </div>
            </li>
            <li className="flex justify-between items-center mb-2">
              <span>Drone 2</span>
              <div className="flex items-center">
                <span className=" mr-2">Battery</span>
                <button className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                  {/* Three dots icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 00-1 1v2a1 1 0 102 0V6a1 1 0 00-1-1zM9 12a1 1 0 100 2 1 1 0 000-2zm1 3a1 1 0 11-2 0 1 1 0 012 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </li>
          </ul>
          <div className="mt-4">
            <button className="bg-green-500 text-white py-2 px-4 rounded shadow mr-2">
              + Drone
            </button>
            <button className="bg-red-500 text-white py-2 px-4 rounded shadow">
              - Drone
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 px-8 border-t border-gray-200"></footer>
    </div>
  );
}
