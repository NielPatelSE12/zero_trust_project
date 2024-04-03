"use client";
import Image from "next/image";
import Heading from "./drones/heading"
import './home.css';

export default function Home() {
  return (
<div>
	<Heading/>
	<div className="welcome-block">
		<a className = "text-9xl text-gray-200 px-30 font-bold">
			<p className = "text-center mt-3 mb-5 text-outline">Welcome to Dronify</p>
		</a>
		<a className = "text-5xl text-gray-200 px-30 font-bold">
			<p className = "text-center text-outline">Leading the world in secure drone package delivery</p>
		</a>
	</div>
</div>
  )
}
