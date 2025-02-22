import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
	lat: 41.2995,
  lng: 69.2401,
};

const Map = () => {
	const apiKey = import.meta.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
