import React from "react";
import Link from "next/link";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { MdEditNote } from "react-icons/md";

export default function AccordiaonItem({
  open,
  toggle,
  theIndex,
  droneData,
  setDroneData,
  droneDatas,
}) {
  const data = droneDatas;
  return (
    <div className="pt-[10px]">
      <div
        className="py[25px] px[50px] flex justify-between items-center cursor-pointer"
        onClick={toggle}
      >
        <p className="text-[22px] font-semibold">{data.Name}</p>
        <div className="text-[30px]">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>

      <Collapse isOpened={open}>
        <div className="p-5 flex flex-col items-center">
          <table className="w-full text-xl text-left">
            <thead>
              <tr className="font-semibold text-left bg-gray-700/50">
                <th>Model</th>
                <th>Make</th>
                <th>Top Speed</th>
                <th>Serial Number</th>
                <th>Battery</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-800/50">
                <td>{data.Model}</td>
                <td>{data.Make}</td>
                <td>{data.TopSpeed}</td>
                <td>{data.SerialNumber}</td>
                <td>{data.BatteryLife}</td>
              </tr>
            </tbody>
          </table>
          <div className="place-self-end">
            <div className="mt-4">
              <button
                className="bg-red-500 text-white py-2 px-2 rounded shadow mx-3"
                onClick={() => {
                  const newData = droneData.filter(
                    (_: any, index: Number) => index !== theIndex
                  );
                  setDroneData(newData);
                  // removeItem(theIndex)
                }}
              >
                <div className="flex items-center">
                  <BsTrash className="mr-1" />
                  Delete Drone
                </div>
              </button>
              <Link
                href={{
                  pathname: "/drones/DroneSettings/",
                  query: { ...data },
                }}
              >
                <button className=" bg-slate-100 text-black py-2 px-2 rounded shadow mx-3">
                  <div className="flex items-center">
                    <MdEditNote />
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
