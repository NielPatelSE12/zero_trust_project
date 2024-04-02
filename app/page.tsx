import Image from "next/image";
import Link from "next/link";
import './home.css';

export default function Home() {
  return (
<div>
	<div className = "mx-auto flex flex-wrap flex-col items-center bg-gray-500">
		<div className = "flex flex-wrap items-center text-base justify-center">
		
			<a className = "margins mr-5 text-2xl">
				<p className = "center">
					<Image src = "/dronify.png" quality = "100" width = "250" height = "100" alt="123"/>
				</p>
			</a>
			
			<a href = "/drones" className = "margins mr-5 text-2xl" id = "border">
					<p className = "center">Drones</p>
			</a>
		
			<a href = "/location" className = "margins mr-5 text-2xl px-20" id = "border">
					<p className = "center">Location</p>
			</a>
		
			<a href = "/alerts" className = "margins mr-5 text-2xl px-20" id = "border">
					<p className = "center">Alerts</p>
			</a>
		
			<a href = "/users" className = "margins mr-5 text-2xl px-20" id = "border">
					<p className = "center">Users</p>
			</a>
			
			<a href = "/login" className = "margins mr-5 text-2xl px-20" id = "border">
					<p className = "center">Login</p>
			</a>

			<a href = "/tracking" className = "margins mr-5 text-2xl px-20" id = "border">
					<p className = "center">Tracking</p>
			</a>
			
		</div>
	</div>
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
