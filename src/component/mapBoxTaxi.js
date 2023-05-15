import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

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
        zoom: 16,
      });

      map.on("load", () => {
        const marker = new mapboxgl.Marker({ color: '#31C48D' })
          .setLngLat([9.1859243, 45.4654219])
          .addTo(map);

        setMap(map);
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return (
    <div
      ref={mapContainer}
      style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, overflow: 'hidden' }}
    />
  );
}