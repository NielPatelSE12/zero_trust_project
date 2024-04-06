// pages/index.tsx
'use client'
import React, { useState } from 'react';
import Map from './map'

const HomePage: React.FC = () => {
  const [startLocation, setStartLocation] = useState<string>('');
  const [endLocation, setEndLocation] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can do additional validation or processing
  };

  return (
    <div>
      <Map></Map>
    </div>
  );
};

export default HomePage;
