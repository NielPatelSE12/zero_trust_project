// page.tsx
import React from "react";
import './location.css';
import Image from "next/image";
import Link from "next/link";
import Heading from '../drones/heading'

const LocationPage: React.FC = () => {
    return (
        <div>
            <Heading />
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
