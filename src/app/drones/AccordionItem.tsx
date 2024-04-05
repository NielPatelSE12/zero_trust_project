import React from "react";
import Link from "next/link";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { MdEditNote } from "react-icons/md";

export default function AccordionItem({
  open,
  toggle,
  theIndex,
  droneData,
  setDroneData,
  droneDatas,
}) {
  const data = droneDatas;

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/drone/${data.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete drone");
      }

      // Remove the deleted drone from the UI
      const newData = droneData.filter((_, index) => index !== theIndex);
      setDroneData(newData);
    } catch (error) {
      console.error("Error deleting drone:", error);
    }
  };

  return (
    <div className="border-b border-gray-300">
      <div
        className="flex justify-between items-center cursor-pointer py-4 px-6"
        onClick={toggle}
      >
        <p className="text-lg font-semibold">{data.name}</p>
        <div className="text-xl">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>

      <Collapse isOpened={open}>
        <div className="p-6">
          <table className="w-full text-base text-left">
            <thead>
              <tr className="font-semibold text-left bg-black-100">
                <th>Model</th>
                <th>Make</th>
                <th>Top Speed</th>
                <th>Serial Number</th>
                <th>Battery</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-black-200">
                <td>{data.model}</td>
                <td>{data.make}</td>
                <td>{data.topSpeed}</td>
                <td>{data.serialNumber}</td>
                <td>{data.batteryLife}</td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-end mt-4">
            <div className="space-x-3">
              <button
                className="bg-red-500 text-white py-2 px-3 rounded shadow"
                onClick={handleDelete}
              >
                <div className="flex items-center">
                  <BsTrash className="mr-1" />
                  Delete Drone
                </div>
              </button>
              <Link
                href={{
                  pathname: "/drones/droneEdit/",
                  query: { ...data },
                }}
              >
                <button className="bg-blue-500 text-white py-2 px-3 rounded shadow">
                  <div className="flex items-center">
                    <MdEditNote className="mr-1" />
                    Modify Drone
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
}
