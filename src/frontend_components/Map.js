import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

const Map = ({ profiles }) => {
  const [viewport, setViewport] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
    zoom: 10,
    width: '100%',
    height: '400px',
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="YOUR_MAPBOX_ACCESS_TOKEN"
        onViewportChange={(newViewport) => setViewport(newViewport)}
      >
        {profiles.map((profile, index) => (
          <Marker
            key={index}
            latitude={profile.lat}
            longitude={profile.lng}
          >
            <div>{profile.name}</div>
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
};

export default Map;
