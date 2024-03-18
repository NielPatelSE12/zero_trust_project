import Image from "next/image";
import Link from "next/link";
import { Navbar } from './components/Navbar';
import dynamic from 'next/dynamic' 

export default function Home() {
  return (
<div>
	<div class = "mx-auto flex flex-wrap p-5 flex-col items-center bg-gray-500">
		<div class = "flex flex-wrap items-center text-base justify-center">
		
			<a class = "margins mr-5 text-2xl">
				<p class = "center">
					<Image src = "/dronify.png" quality = "100" width = "250" height = "100"/>
				</p>
			</a>
			
			<a href = "/Login" class = "margins mr-5 text-2xl px-20" id = "border">
				<div class = "margins">
					<p class = "center">Drone</p>
				</div>
			</a>
		
			<a href = "/Login" class = "margins mr-5 text-2xl px-20" id = "border">
				<div class = "margins">
					<p class = "center">Location</p>
				</div>
			</a>
		
			<a href = "/Login" class = "margins mr-5 text-2xl px-20" id = "border">
				<div class = "margins">
					<p class = "center">Alerts</p>
				</div>
			</a>
		
			<a href = "/Login" class = "margins mr-5 text-2xl px-20" id = "border">
				<div class = "margins">
					<p class = "center">Users</p>
				</div>
			</a>
			
			<a href = "/Login" class = "margins mr-5 text-2xl px-20" id = "border">
				<div class = "margins">
					<p class = "center">Login</p>
				</div>
			</a>
			
		</div>
	</div>
	<a class = "text-9xl text-gray-200 px-30 font-bold">
		<p class = "text-center mt-3 mb-5 text-outline">Welcome to Dronify</p>
	</a>
	<a class = "text-5xl text-gray-200 px-30 font-bold">
		<p class = "text-center text-outline">Leading the world in secure drone package delivery</p>
	</a>
</div>
  )
}