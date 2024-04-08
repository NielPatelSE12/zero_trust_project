import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const Map = () => {
  const [map, setMap] = useState(null);
  const [startLocation, setStartLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);
  const [dronePosition, setDronePosition] = useState(null);
  const [truckPosition, setTruckPosition] = useState(null);

  const onLoad = (map) => {
    setMap(map);
  };

  const handleSubmit = () => {
    // Here you can handle form submission
    // For now, let's just update the map based on the start and end locations
    calculateRoute();
  };

  const calculateRoute = () => {
    if (!startLocation || !endLocation || !map) return;

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: startLocation,
        destination: endLocation,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          const { routes } = result;
          const { lat, lng } = routes[0].legs[0].start_location;
          setTruckPosition({ lat, lng });

          const routeCoordinates = routes[0].overview_path;
          animateMarker(routeCoordinates);
          
          console.log('Center coordinates:', lat, lng); // Log the coordinates
          const center = { lat, lng };
          map.setCenter(center);
        } else {
          console.error(`Error fetching directions: ${status}`);
        }
      }
    );
  };

  const animateMarker = (routeCoordinates) => {
    if (!routeCoordinates || routeCoordinates.length === 0) return;

    let i = 0;
    const interval = setInterval(() => {
      const { lat, lng } = routeCoordinates[i];
      setDronePosition({ lat, lng });

      if (i === routeCoordinates.length - 1) {
        clearInterval(interval);
      } else {
        i++;
      }
    }, 1000); // Adjust the interval for smoother animation
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <LoadScript googleMapsApiKey="AIzaSyArrqi_EoEubmYG9lcEeCoCRdYiqS248mA">
        {/* If you have other components to load, you can place them here */}
      </LoadScript>
      <iframe src="https://storage.googleapis.com/maps-solutions-12mhj3dmsg/address-selection/a4w4/address-selection.html" className="w-full h-full" allowFullScreen loading="lazy"></iframe>
    </div>
  );
};

export default Map;
