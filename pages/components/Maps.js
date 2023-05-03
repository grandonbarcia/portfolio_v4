import { useMemo } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

export const Maps = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return <Map />;
};

function Map() {
  const center = useMemo(() => ({ lat: 37.386767, lng: -121.9786626 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="h-80 w-100">
      <MarkerF position={center} />
    </GoogleMap>
  );
}
