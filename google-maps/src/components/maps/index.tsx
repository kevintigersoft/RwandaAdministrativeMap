import React, { useEffect, useState, useRef } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface CustomMapProps {
  center?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  options: google.maps.MapOptions;
}

const MapComponent: React.FC<CustomMapProps> = ({
  center,
  zoom = 10,
  options,
}) => {
  const [isClient, setIsClient] = useState(false);
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const mapRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }
  }, [isClient]);

  // Define the police stations you want to show
  const policeStations = [
    {
      name: "Kigali Police Station 1",
      lat: -1.944676,
      lng: 30.089746,
    },
    {
      name: "Kigali Police Station 2",
      lat: -1.953611,
      lng: 30.060556,
    },
    // Add more police stations in Kigali as needed
  ];

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
    >
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100vh" }}
        center={center || userLocation || undefined}
        zoom={zoom}
        options={options}
        onLoad={(map) => {
          mapRef.current = map;
        }}
      >
        {isClient &&
          policeStations.map((station, index) => (
            <Marker
              key={index}
              position={{ lat: station.lat, lng: station.lng }}
              title={station.name}
              icon={{
                url: "https://police.gov.rw/fileadmin/templates/img/RNP_LOGO.png",
                scaledSize: isClient
                  ? new window.google.maps.Size(50, 50)
                  : undefined,
              }}
            />
          ))}

        {userLocation && (
          <Marker
            position={userLocation}
            title="Your Location"
            icon={{
              path: google.maps.SymbolPath.CIRCLE,
              scale: 7,
              fillColor: "red",
              fillOpacity: 1,
              strokeColor: "white",
              strokeWeight: 2,
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};
export default MapComponent;
