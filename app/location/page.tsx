// page.tsx
import React from "react";
import './location.css';
import Image from "next/image";
import Link from "next/link";

const LocationPage: React.FC = () => {
    return (
        <div>
            <div className="top-bar">
                <div className="mx-auto flex flex-wrap flex-col items-center bg-gray-500">
                    <div className="flex flex-wrap items-center text-base justify-center">
                        <a className="margins mr-5 text-2xl">
                            <p className="center">
                                <Image src="/dronify.png" quality="100" width="250" height="100" alt="123" />
                            </p>
                        </a>
                        <a href="/drones" className="margins mr-5 text-2xl" id="border">
                            <p className="center">Drones</p>
                        </a>
                        <a href="/location" className="margins mr-5 text-2xl px-20" id="border">
                            <p className="center">Location</p>
                        </a>
                        <a href="/alerts" className="margins mr-5 text-2xl px-20" id="border">
                            <p className="center">Alerts</p>
                        </a>
                        <a href="/users" className="margins mr-5 text-2xl px-20" id="border">
                            <p className="center">Users</p>
                        </a>
                        <a href="/login" className="margins mr-5 text-2xl px-20" id="border">
                            <p className="center">Login</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="location-page">
                <div className="options-container">
                    <div className="option">
                        <h2>Add New Location</h2>
                        <form>
                            <label>Location Name:</label>
                            <input type="text" name="locationName" />
                            <label>Location Coordinates:</label>
                            <input type="text" name="locationCoordinates" />
                            <label>Algorithm:</label>
                            <input type="text" name="algorithm" />
                            <button type="submit">Submit</button>
                        </form>
                    </div>

                    <div className="option">
                        <h2>Delete a Location</h2>
                        <form>
                            <label>Location ID:</label>
                            <input type="text" name="locationId" />
                            <button type="submit">Delete</button>
                        </form>
                    </div>

                    <div className="option">
                        <h2>Modify Location</h2>
                        <form>
                            <label>Location ID:</label>
                            <input type="text" name="locationId" />
                            <label>New Location Name:</label>
                            <input type="text" name="newLocationName" />
                            <button type="submit">Modify</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationPage;
