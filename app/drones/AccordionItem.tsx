import React from "react";
import Link from "next/link";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function AccordiaonItem({
  open,
  toggle,
  DroneName,
  DroneModel,
  DroneMake,
  DroneSerialNumber,
  DroneBatteryLife,
  DroneTopSpeed,
  theIndex,
  droneData,
  setDroneData,
}) {
  return (
    <div className="pt-[10px]">
      <div
        className="py[25px] px[50px] flex justify-between items-center cursor-pointer"
        onClick={toggle}
      >
        <p className="text-[22px] font-semibold">{DroneName}</p>
        <div className="text-[30px]">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>

      <Collapse isOpened={open}>
        <div className="px-[50px] pb-[20px]">
          <div className="text-[15px] flex items-center justify-between my-3">
            <div>Drone Model: {DroneModel}</div>
            <div>Drone Make: {DroneMake}</div>
            <div>Drone Serial Number: {DroneSerialNumber}</div>
            <div>Drone Top Speed: {DroneTopSpeed}</div>
            <div>Drone Battery: {DroneBatteryLife}</div>
          </div>
          <div className="flex flex-col items-end">
            <div className="mt-4">
              <button className="bg-red-500 text-white py-2 px-4 rounded shadow mx-3" onClick={() => {
                    const newData = droneData.filter((_: any, index: Number) => index !== theIndex);
                    setDroneData(newData);
                  // removeItem(theIndex)
              }}>
                Delete Drone
              </button>
              <Link href="/drones/DroneSettings">
                <button className="outline outline-1 outline-black text-white py-2 px-4 rounded shadow">
                  Modify Drone
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
}
