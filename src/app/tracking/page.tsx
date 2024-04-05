import React from "react";
import './tracking.css';
import Image from "next/image";
import earth from "./earth-1365995_960_720.jpg";
import Heading from "../drones/heading"











// Function for the Tracking Form
const Tracking = () => {
  return (
    <>
      <div className="background">
      <Heading/>
        <div className="content">
          <h1 className="titleone">Tracking Form</h1>
          
          <form className="formone">
            <div>
              <label>Text Box 1</label>
              <input type="text" name="info1" />
            </div>

            <div>
              <label>Text Box 2</label>
              <input type="text" name="info2" />
            </div>

            <div>
              <label>Text Box 3</label>
              <input type="text" name="info3" />
            </div>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Tracking;
