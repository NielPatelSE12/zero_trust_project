// pages/TrackingPage.tsx
'use client'
import React, { useState } from 'react';
import Map from './map';
import './tracking-page.css'; // Import the CSS file

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
        <h1 className="text-3xl font-bold mb-4">Tracking Page</h1>
        <Map />
      </div>
    </div>
  );
};

export default TrackingPage;
