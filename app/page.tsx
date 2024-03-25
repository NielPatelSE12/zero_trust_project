import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
<div>
	<div className = "mx-auto flex flex-wrap p-5 flex-col items-center bg-gray-500">
		<div className = "flex flex-wrap items-center text-base justify-center">
		
			<a className = "margins mr-5 text-2xl">
				<p className = "center">
					<Image src = "/dronify.png" quality = "100" width = "250" height = "100" alt="123"/>
				</p>
			</a>
			
			<a href = "/drones" className = "margins mr-5 text-2xl px-20" id = "border">
				<div className = "margins">
					<p className = "center">Drone</p>
					<Link href="/drones/DroneSettings"></Link>
				</div>
			</a>
		
			<a href = "/location" className = "margins mr-5 text-2xl px-20" id = "border">
				<div className = "margins">
					<p className = "center">Location</p>
				</div>
			</a>
		
			<a href = "/alerts" className = "margins mr-5 text-2xl px-20" id = "border">
				<div className = "margins">
					<p className = "center">Alerts</p>
				</div>
			</a>
		
			<a href = "/users" className = "margins mr-5 text-2xl px-20" id = "border">
				<div className = "margins">
					<p className = "center">Users</p>
				</div>
			</a>
			
			<a href = "/login" className = "margins mr-5 text-2xl px-20" id = "border">
				<div className = "margins">
					<p className = "center">Login</p>
				</div>
			</a>
			
		</div>
	</div>
	<a className = "text-9xl text-gray-200 px-30 font-bold">
		<p className = "text-center mt-3 mb-5 text-outline">Welcome to Dronify</p>
	</a>
	<a className = "text-5xl text-gray-200 px-30 font-bold">
		<p className = "text-center text-outline">Leading the world in secure drone package delivery</p>
	</a>
</div>
  )
}
