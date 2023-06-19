import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export function Map(props) {
    const mapContainerStyle = {
        height: '400px',
        width: '70%',
        "margin-left": "auto",
        "margin-right": "auto",
        transform: "translateY(50%)",
        "border-radius": "10px",
    };

    const center = {
        lat: 51.477992,
        lng: -0.14823,
    };

    const mapOptions = {
        zoom: 15,
        center: center,
    };

    return (
        <div className="travel-container">
        <div className="map-container">
            <h1>Interactive Map</h1>
        <LoadScript googleMapsApiKey="AIzaSyD8j_NkF2YhA8Aas-FFB3NEW13zVG7AdL8">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={mapOptions.zoom}
            />
        </LoadScript>
        </div>
        </div>
    );
}