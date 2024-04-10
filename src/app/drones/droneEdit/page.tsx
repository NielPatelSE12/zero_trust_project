"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Heading from "../heading";
import { useRouter } from "next/navigation";

export default function EditDronePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const droneId = searchParams.get("id");

  const [formData, setFormData] = useState({
    name: "",
    model: "",
    make: "",
    serialNumber: "",
    batteryLife: "",
    topSpeed: "",
  });

  const [error, setError] = useState('')

  useEffect(() => {
    if (droneId) {
      // Fetch existing drone data if editing
      fetch(`/api/drone/${droneId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch drone data");
          }
          return response.json();
        })
        .then((data) => {
          setFormData(data);
        })
        .catch((error) => {
          console.error("Error fetching drone data:", error);
        });
    }
  }, [droneId]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    console.log(JSON.stringify(formData));
    e.preventDefault();
    try {
      const response = await fetch(
        `/api/drone/createDrone`,
        {
          method: droneId ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
  
      if (!response.ok) {
        // log the error in console and set the error to display to the user
        console.log('The error is ' + response.status);
        setError('Hmm, we can\'t make this drone. Make sure all fields are complete and that your serial number is unique!');
        throw new Error(
          `Failed to ${droneId ? "update" : "create"} drone`
        );
      }
      else{
        // send user back to regular drones page after they SUCCESSFULLY save a new drone
        router.push('/drones')
      }
  
      // Reset form data after submission
      setFormData({
        name: "",
        model: "",
        make: "",
        serialNumber: "",
        batteryLife: "",
        topSpeed: "",
      });

    } catch (error) {
      console.error("Error submitting drone data:", error);
    }
  };  

  const handleCancel = () => {
    // Reset form data to initial state
    setFormData({
      name: "",
      model: "",
      make: "",
      serialNumber: "",
      batteryLife: "",
      topSpeed: "",
    });
  };

  return (
    <div className="flex flex-col h-full dark:bg-gradient-to-b dark:from-gray-900 dark:via-indigo-800 dark:to-gray-600 bg-gradient-to-b from-blue-900 via-blue-600 to-blue-200 text-white">
      {/* Temp Header: To be finalized*/}
      <Heading />
      <form
        onSubmit={handleSubmit}
        className="border-b border-gray-500/10 pb-32 pl-6"
      >
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-white"
            >
              Drone Name
            </label>
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder-text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Drone Name"
              />
            </div>
          </div>

          {/* Model form item */}
          <div className="sm:col-span-4 mt-2">
            <label
              htmlFor="model"
              className="block text-sm font-medium leading-6 text-white"
            >
              Drone Model
            </label>
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="model"
                id="model"
                value={formData.model}
                onChange={handleChange}
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder-text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Drone Model"
              />
            </div>
          </div>

          {/* Make form item */}
          <div className="sm:col-span-4 mt-2">
            <label
              htmlFor="make"
              className="block text-sm font-medium leading-6 text-white"
            >
              Drone Make
            </label>
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="make"
                id="make"
                value={formData.make}
                onChange={handleChange}
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder-text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Drone Maker"
              />
            </div>
          </div>

          {/* Serial Number form item */}
          <div className="sm:col-span-4 mt-2">
            <label
              htmlFor="serialNumber"
              className="block text-sm font-medium leading-6 text-white"
            >
              Serial Number
            </label>
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="serialNumber"
                id="serialNumber"
                value={formData.serialNumber}
                onChange={handleChange}
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder-text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Serial Number"
              />
            </div>
          </div>

          {/* Battery Info form item */}
          <div className="sm:col-span-4 mt-2">
            <label
              htmlFor="batteryLife"
              className="block text-sm font-medium leading-6 text-white"
            >
              Battery Life Expectancy
            </label>
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="batteryLife"
                id="batteryLife"
                value={formData.batteryLife}
                onChange={handleChange}
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder-text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Battery life Expectancy"
              />
            </div>
          </div>

          {/* Speed Info form item */}
          <div className="sm:col-span-4 mt-2">
            <label
              htmlFor="topSpeed"
              className="block text-sm font-medium leading-6 text-white"
            >
              Top Speed
            </label>
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="topSpeed"
                id="topSpeed"
                value={formData.topSpeed}
                onChange={handleChange}
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder-text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Top speed"
              />
            </div>
            {/* display the error to the user if an error is raised upon form submission */}
            <div className="mt-10 text-red-600 font-bold text-xl">
                {error && <h1>{error}</h1>}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="m-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            onClick={handleCancel}
            className="rounded-md px-3 py-2 bg-slate-100 text-sm font-semibold leading-6 text-black"
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
      </form>
    </div>
  );
}
