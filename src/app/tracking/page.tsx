'use client'
// pages/TrackingPage.tsx
import React, { useState } from 'react';
import './tracking-page.css'; // Import the CSS file
import Map from './map';

const TrackingPage: React.FC = () => {
  const [startLocation, setStartLocation] = useState<string>('');
  const [endLocation, setEndLocation] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can do additional validation or processing
  };

  return (
    <div className="tracking-page-background">
      <div className="tracking-page-content">
        <h1 className="text-3xl font-bold mb-4">Track Drone</h1>
      </div>
      <Map></Map>
      <iframe
        title="Address Selection"
        src="https://storage.googleapis.com/maps-solutions-12mhj3dmsg/address-selection/zks3/address-selection.html"
        width="200%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TrackingPage;