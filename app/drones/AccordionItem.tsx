import React from "react";
import Link from "next/link";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/router";

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
        <div className="px-[50px] pb-[20px]">
          <div className="text-[15px] flex items-center justify-between my-3">
            <div>Drone Model: {data.Model}</div>
            <div>Drone Make: {data.Model}</div>
            <div>Drone Serial Number: {data.SerialNumber}</div>
            <div>Drone Top Speed: {data.TopSpeed}</div>
            <div>Drone Battery: {data.BatteryLife}</div>
          </div>
          <div className="flex flex-col items-end">
            <div className="mt-4">
              <button
                className="bg-red-500 text-white py-2 px-4 rounded shadow mx-3"
                onClick={() => {
                  const newData = droneData.filter(
                    (_: any, index: Number) => index !== theIndex
                  );
                  setDroneData(newData);
                  // removeItem(theIndex)
                }}
              >
                Delete Drone
              </button>
              <Link
                href={{
                  pathname: "/drones/DroneSettings/",
                  query: { ...data },
                }}
              >
                <button className="outline outline-1 outline-black bg-slate-100  text-black py-2 px-4 rounded shadow">
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
