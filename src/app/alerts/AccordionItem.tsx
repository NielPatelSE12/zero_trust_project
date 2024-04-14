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
  alertData,
  setAlertData,
  alertDatas,
}) {
  const data = alertDatas;

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/alert/${data.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete alert");
      }

      // Remove the deleted alert 
      const newData = alertData.filter((_, index) => index !== theIndex);
      setAlertData(newData);
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
        <p className="text-lg font-semibold">Name of alert: {data.nameOfAlert}</p>
        <div className="text-xl">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>

      <Collapse isOpened={open}>
        <div className="p-6">
          <table className="w-full text-base text-left">
            <thead>
              <tr className="font-semibold text-left bg-black-100">
                <th>Name of Alert</th>
                <th>Reason</th>
                <th>Error Message</th>
                <th>Serial Number</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-black-200">
                <td>{data.nameOfAlert}</td>
                <td>{data.reason}</td>
                <td>{data.errorMessage}</td>
                <td>{data.id}</td>
                <td>{data.status}</td>
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
                  Delete Alert
                </div>
              </button>
              <Link
                href={{
                  pathname: "/alerts/alertEdit/",
                  query: { ...data },
                }}
              >
                <button 
                  className="bg-blue-500 text-white py-2 px-3 rounded shadow"
                >
                  <div className="flex items-center">
                    <MdEditNote className="mr-1" />
                    Modify Alert
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
