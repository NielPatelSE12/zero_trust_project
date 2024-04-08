import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const Map = () => {
  const [map, setMap] = useState(null);
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [dronePosition, setDronePosition] = useState(null);
  const [truckPosition, setTruckPosition] = useState(null);

  const onLoad = (map) => {
    setMap(map);
  };

  const handleSubmit = () => {
    // Simulate pushing the start and end locations into a database
    console.log('Start Location:', startLocation);
    console.log('End Location:', endLocation);
  };

  const handleStartChange = (event) => {
    setStartLocation(event.target.value);
  };

  const handleEndChange = (event) => {
    setEndLocation(event.target.value);
  };

  const calculateRoute = () => {
    // Implement your logic to calculate the route here
    // This function can remain as it is for now
  };

  const animateMarker = (routeCoordinates) => {
    // Implement your logic to animate the marker here
    // This function can remain as it is for now
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}>
        {/* Google Map */}
        <GoogleMap
          onLoad={onLoad}
          center={{ lat: 0, lng: 0 }}
          zoom={3}
          mapContainerStyle={{ width: '70%', height: '100vh' }}
        >
          {/* Add markers for truck and drone */}
          {truckPosition && <Marker position={truckPosition} />}
          {dronePosition && <Marker position={dronePosition} />}
        </GoogleMap>

        {/* Form for entering start and end locations */}
        <div className="absolute top-0 right-0 p-8 bg-white shadow-md rounded-md">
          <form>
            <div className="mb-4">
              <label htmlFor="startLocation" className="block text-gray-700 font-bold mb-2">Start Location:</label>
              <input
                type="text"
                id="startLocation"
                name="startLocation"
                value={startLocation}
                onChange={handleStartChange}
                autoComplete="on"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="endLocation" className="block text-gray-700 font-bold mb-2">End Location:</label>
              <input
                type="text"
                id="endLocation"
                name="endLocation"
                value={endLocation}
                onChange={handleEndChange}
                autoComplete="on"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Save to Database
            </button>
          </form>
        </div>
      </LoadScript>
    </div>
  );
};

export default Map;
