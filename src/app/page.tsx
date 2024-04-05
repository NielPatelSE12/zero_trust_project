import Image from "next/image";
import Heading from "./drones/heading";
import './home.css';
import backgroundImage from "./home.jpeg";

export default function Home() {
  return (
    <div className="background">
      <Image
        src={backgroundImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="background-image"
      />
      <Heading />
      <div className="welcome-block">
        <h1 className="text-4xl lg:text-5xl text-center text-gray-900 font-bold mb-6">Welcome to Dronify</h1>
        <p className="text-lg lg:text-xl text-center text-gray-700">Leading the world in secure drone package delivery</p>
      </div>
    </div>
  );
}
