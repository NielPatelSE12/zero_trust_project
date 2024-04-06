import React from "react";
import './tracking.css';
import Image from "next/image";
import earth from "./earth-1365995_960_720.jpg";
import Heading from "../drones/heading";
import GoogleMaps from "./components/googlemaps"; // Assuming the component name is GoogleMaps
import { GoogleMap } from "@react-google-maps/api";

const Tracking = () => {
  return (
    <div>
      <GoogleMaps/>
    </div>
  );
}

export default Tracking;
