import React from 'react';
import Image from "next/image";
import Heading from "./drones/heading";
import './home.css';
import backgroundImage from "./home.jpeg";
import Imageone from "./homepageimage.jpeg";
import Imagetwo from "./worldmap.jpeg";
import LoginImage from "./World Bank Logistics Performance.jpeg";

export default function Home() {
  // Function to calculate font size based on text length
  const calculateFontSize = (text:string) => {
    const textLength = text.length;
    if (textLength <= 20) {
      return '4xl'; // Apply text-4xl class
    } else if (textLength <= 30) {
      return '3xl'; // Apply text-3xl class
    } else {
      return '2xl'; // Apply text-2xl class
    }
  };

  return (
    <div className="background">
      <Image
        src={Imagetwo}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="background-image"
      />
      <Heading />
      <div className="welcome-block">
        <h1 className="text-4xl lg:text-5xl text-center text-gray-900 font-bold mb-6">Logistic Management Drone Delivery</h1>
        <p className="text-lg lg:text-xl text-center text-gray-700">Full Stack Software Development</p>
      </div>
      <div className="sentence-boxes">
        <div className={`sentence-box text-${calculateFontSize("Protecting and Securing Supply Chains.")} lg:text-${calculateFontSize("Protecting and Securing Supply Chains.")} text-center text-blue-300 font-bold`}>
          <p>Protecting and Securing Supply Chains.</p>
        </div>
        <div className={`sentence-box text-${calculateFontSize("Tracking and Recording Logistic Management with clear presentation .")} lg:text-${calculateFontSize("Tracking and Recording Logistic Management with clear presentation .")} text-center text-blue-300  font-bold`}>
          <p>Tracking and Recording Logistic Management.</p>
        </div>
        <div className={`sentence-box text-${calculateFontSize("Live Dynamic Map with Tracking capabilities.")} lg:text-${calculateFontSize("Live Dynamic Map with Tracking capabilities.")} text-center  font-bold`}>
          <p>Live Dynamic Map with Tracking capabilities.</p>
        </div>
      </div>
    </div>
  );
}
