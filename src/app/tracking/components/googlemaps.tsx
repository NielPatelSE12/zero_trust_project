import React, { useState } from 'react';
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 40.7128,
  lng: -74.0060
};

const GoogleMaps = () => {
  const [startPlace, setStartPlace] = useState('');
  const [finishPlace, setFinishPlace] = useState('');

  const onLoad = (autocomplete) => {
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (!place.geometry) {
        console.error('No location found for input: ', place);
        return;
      }

      // Update the start or finish place based on the autocomplete input
      if (autocomplete.id === 'start') {
        setStartPlace(place.formatted_address);
      } else if (autocomplete.id === 'finish') {
        setFinishPlace(place.formatted_address);
      }
    });
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}
      libraries={['places']}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Autocomplete
          onLoad={onLoad}
          restrictions={{ country: 'us' }}
          id="start"
          placeholder="Start Location"
        />
        <Autocomplete
          onLoad={onLoad}
          restrictions={{ country: 'us' }}
          id="finish"
          placeholder="End Location"
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMaps;
