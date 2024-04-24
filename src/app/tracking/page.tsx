'use client'
import React from 'react';
import FlightMap from './map';

const Page: React.FC = () => {
  return (
    <div>
      <FlightMap></FlightMap>
      <script src="/map.js" />
    </div>
  );
};

export default Page;
