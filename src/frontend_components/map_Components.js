// Map.js
import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

export const Map = ({ profiles }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-maps-script',
    googleMapsApiKey: "AIzaSyBM4VXmTP7am5HmTFR8P2Gu5R1za1YC0hY",
  });

  const [map, setMap] = useState(null);

  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const onLoad = React.useCallback((mapInstance) => {
    setMap(mapInstance);
  }, []);

  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

  useEffect(() => {return() => { 
   if (map) {
     map.setMap(null);

    } }; 
    }, [map]);

  return (
    <div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {profiles.map((profile, index) => (
            <Marker
              key={index}
              position={{
                lat: profile.lat,
                lng: profile.lng,
              }}
              title={profile.name}
            />
          ))}
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

