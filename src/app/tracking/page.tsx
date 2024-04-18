'use client'
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
  const [dronePosition, setDronePosition] = useState({ lat: 0, lng: 0 });
  const [truckPosition, setTruckPosition] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const moveMarkers = () => {
      // Simulate fetching data from Amazon APIs
      // In a real application, replace this with actual API calls
      const fetchDroneData = async () => {
        // Simulate fetching drone position
        const droneResponse = await fetch('url_to_drone_api');
        const droneData = await droneResponse.json();
        setDronePosition({ lat: droneData.lat, lng: droneData.lng });
      };

      const fetchTruckData = async () => {
        // Simulate fetching truck position
        const truckResponse = await fetch('url_to_truck_api');
        const truckData = await truckResponse.json();
        setTruckPosition({ lat: truckData.lat, lng: truckData.lng });
      };

      fetchDroneData();
      fetchTruckData();
    };

    const interval = setInterval(moveMarkers, 5000); // Update positions every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyDW8kEZtLoBlYUlOnepYaRNEc-OUKiav5c">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={{ lat: 0, lng: 0 }} // Initial center of the map
        zoom={4} // Initial zoom level
      >
        <Marker position={dronePosition} />
        <Marker position={truckPosition} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
