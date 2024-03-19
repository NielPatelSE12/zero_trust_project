import React from "react";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function AccordiaonItem({ open, toggle, title, desc }) {
  return (
    <div className="pt-[10px]">
      <div
        className="py[25px] px[50px] flex justify-between items-center cursor-pointer"
        onClick={toggle}
      >
        <p className="text-[22px] font-semibold">{title}</p>
        <div className="text-[30px]">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>

      <Collapse isOpened={open}>
        <div className="px-[50px] pb-[20px]">
          {desc}
          <div className="mt-4">
            <button className="bg-red-500 text-white py-2 px-4 rounded shadow">
              Delete Drone
            </button>
          </div>
        </div>
      </Collapse>
    </div>
  );
}
