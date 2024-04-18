'use client';
import React, { useEffect, useState } from 'react';

// Name the function for better readability and debugging
export default function LocationTable() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('/api/Location/displayLocation')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch locations: ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setLocations(data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error: ' + error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Coordinates</th>
          <th>Algorithm</th>
        </tr>
      </thead>
      <tbody>
        {locations.map(location => (
          <tr key={location.id}>
            <td>{location.id}</td>
            <td>{location.locationName}</td>
            <td>{location.locationCords}</td> {/* Assume typo fixed from locationCords to locationCoords */}
            <td>{location.locationAlg}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
