import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import '../css/mapBox.css';
import "mapbox-gl/dist/mapbox-gl.css"

mapboxgl.accessToken = 'pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg';

export function MapBox() {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [9.1859243, 45.4654219],
        zoom: 15,
        containerStyle: {
          position: "absolute",
          width: '100%',
          height: '100%'
        },
      });

      const marker = new mapboxgl.Marker()
        .setLngLat([9.1859243, 45.4654219])
        .addTo(map);

      map.on("load", () => {
        setMap(map);
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, []);

  return (
    <div
      ref={mapContainer}
      className='mapbox-map'
    />
  );
}
