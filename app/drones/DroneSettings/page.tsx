"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSearchParams } from "next/navigation";

export default function Example() {
  const searchParams = useSearchParams();
  const droneSN = searchParams.get("SerialNumber");
  const droneName = searchParams.get("Name");
  const droneSpeed = searchParams.get("TopSpeed");
  const droneBat = searchParams.get("BatteryLife");
  const droneMake = searchParams.get("Make");
  const droneModel = searchParams.get("Model");

  interface FormData {
    Name: string;
    Model: string;
    Make: string;
    SerialNumber: string;
    BatteryLife: string;
    TopSpeed: string;
  }
  const initialFormData: FormData = {
    Name: droneName || "",
    Model: droneModel || "",
    Make: droneMake || "",
    SerialNumber: droneSN || "",
    BatteryLife: droneBat || "",
    TopSpeed: droneSpeed || "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your logic to handle form submission, such as updating state or sending data to the server
    console.log(formData);
    // Reset form data after submission
    setFormData({
      Name: "",
      Model: "",
      Make: "",
      SerialNumber: "",
      BatteryLife: "",
      TopSpeed: "",
    });
  };
  const handleCancel = () => {
    // Reset form data to initial state
    setFormData({
      Name: "",
      Model: "",
      Make: "",
      SerialNumber: "",
      BatteryLife: "",
      TopSpeed: "",
    });
  };

  return (
    <div className="flex flex-col h-screen overscroll-auto dark:bg-gradient-to-b dark:from-gray-900 dark:via-indigo-800 dark:to-gray-600 bg-gradient-to-b from-blue-900 via-blue-600 to-blue-200 text-white">
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
          <RxHamburgerMenu className="text-2xl" />
        </div>
      </header>

      <form onSubmit={handleSubmit}>
        <div className="h-full space-y-12 p-5 dark:bg-gradient-to-b dark:from-gray-900 dark:via-indigo-800 dark:to-gray-600 bg-gradient-to-b from-blue-900 via-blue-600 to-blue-200 text-white">
          <div className="border-b border-gray-500/10 pb-12">
            {/*Drone Name item*/}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="Name"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Drone Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="Name"
                      id="Name"
                      value={formData.Name}
                      onChange={handleChange}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Drone Name"
                    />
                    {/*add Drone Name into placeholder*/}
                  </div>
                </div>
              </div>
              {/* Model form item */}
              <div className="sm:col-span-4">
                <label
                  htmlFor="Model"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Drone Model
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="Model"
                      id="Model"
                      value={formData.Model}
                      onChange={handleChange}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Drone Model"
                    />
                    {/*add Drone Model into placeholder*/}
                  </div>
                </div>
              </div>

              {/* Make form item */}
              <div className="sm:col-span-4">
                <label
                  htmlFor="Make"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Drone Make
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="Make"
                      id="Make"
                      value={formData.Make}
                      onChange={handleChange}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Drone Maker"
                    />
                    {/*add Drone Model into placeholder*/}
                  </div>
                </div>
              </div>

              {/* Serial Number form item */}
              <div className="sm:col-span-4">
                <label
                  htmlFor="SerialNumber"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Serial Number
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="SerialNumber"
                      id="SerialNumber"
                      value={formData.SerialNumber}
                      onChange={handleChange}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Serial Number"
                    />
                    {/*add Drone's serial Number into placeholder*/}
                  </div>
                </div>
              </div>

              {/* Battery Info form item */}
              <div className="sm:col-span-4">
                <label
                  htmlFor="BatteryLife"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Battery Life Expectancy
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="BatteryLife"
                      id="BatteryLife"
                      value={formData.BatteryLife}
                      onChange={handleChange}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Battery life Expectancy"
                    />
                    {/*add Drone's Battery life into placeholder*/}
                  </div>
                </div>
              </div>
              {/* Speed Info form item */}
              <div className="sm:col-span-4">
                <label
                  htmlFor="TopSpeed"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Top Speed
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="TopSpeed"
                      id="TopSpeed"
                      value={formData.TopSpeed}
                      onChange={handleChange}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Top speed"
                    />
                    {/*add Drone's top speed into placeholder*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Buttons */}
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              onClick={handleCancel}
              className=" rounded-md px-3 py-2 bg-slate-100 text-sm font-semibold leading-6 text-black"
            >
              Clear
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
