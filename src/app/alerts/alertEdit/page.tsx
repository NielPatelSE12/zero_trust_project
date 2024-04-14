"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Heading from "../heading";

export default function EditAlertPage() {

  const searchParams = useSearchParams();
  const alertId = searchParams.get("id");

  const router = useRouter();

  const [formData, setFormData] = useState({
    nameOfAlert: "",
    reason: "",
    errorMessage: "",
    status: "",
    serialNumber: "",
  });

  const [error, setError] = useState('')

  useEffect(() => {
    if (alertId) {
      // Fetch existing alert data if editing
      fetch(`/api/alert`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch alert data");
          }
          return response.json();
        })
        .then((data) => {
          setFormData(data);
        })
        .catch((error) => {
          console.error("Error fetching alert data:", error);
        });
    }
  }, [alertId]);
  
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
        `/api/alert/createAlert`,
        {
          method: alertId ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
  
      if (!response.ok) {
        console.log('The error is ' + response.status);
        setError('Hmm, we can\'t make an alert. Make sure all fields are complete and that your serial number is unique!');
        throw new Error(
          `Failed to ${alertId ? "update" : "create"} alert`
        );
      }

      else{
        router.push('/alerts')
      }
  
      // Reset form data after submission
      setFormData({
        nameOfAlert: "",
        reason: "",
        errorMessage: "",
        serialNumber: "",
        status: "",
      });

    } catch (error) {
      console.error("Error submitting alert data:", error);
    }
  };  

  const handleCancel = () => {
    // Reset form data to initial state
    setFormData({
      nameOfAlert: "",
      reason: "",
      errorMessage: "",
      status: "",
      serialNumber: "",
    });
  };

  return (
    <div className="flex flex-col h-full dark:bg-gradient-to-b dark:from-yellow-100 dark:via-yellow-100 dark:to-yellow-100 bg-gradient-to-b from-yellow-200 via-yellow-100 to-yellow-200 text-black">
      {/* Temp Header: To be finalized*/}
      <Heading />
      <form
        onSubmit={handleSubmit}
        className="border-b border-gray-500/10 pb-32 pl-6"
      >
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label
              htmlFor="nameOfAlert"
              className="block text-sm font-medium leading-6 text-black"
            >
              Name of alert
            </label>
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="nameOfAlert"
                id="nameOfAlert"
                value={formData.nameOfAlert}
                onChange={handleChange}
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black placeholder-text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Name of Alert"
              />
            </div>
          </div>

          {/* Reason form item */}
          <div className="sm:col-span-4 mt-2">
            <label
              htmlFor="reason"
              className="block text-sm font-medium leading-6 text-black"
            >
              Reason
            </label>
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="reason"
                id="reason"
                value={formData.reason}
                onChange={handleChange}
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black placeholder-text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Reason"
              />
            </div>
          </div>

          {/* Error Message form item */}
          <div className="sm:col-span-4 mt-2">
            <label
              htmlFor="errorMessage"
              className="block text-sm font-medium leading-6 text-black"
            >
              Error Message
            </label>
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="errorMessage"
                id="errorMessage"
                value={formData.errorMessage}
                onChange={handleChange}
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black placeholder-text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Error Message"
              />
            </div>
          </div>

          {/* Serial Number form item */}
          <div className="sm:col-span-4 mt-2">
            <label
              htmlFor="serialNumber"
              className="block text-sm font-medium leading-6 text-black"
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
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black placeholder-text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Serial Number"
              />
            </div>
          </div>

          {/* Status form item */}
          <div className="sm:col-span-4 mt-2">
            <label
              htmlFor="status"
              className="block text-sm font-medium leading-6 text-black"
            >
              Status
            </label>
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="status"
                id="status"
                value={formData.status}
                onChange={handleChange}
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black placeholder-text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Status"
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
            className="rounded-md bg-green-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
