import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

export function MapBox() {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  const [key, setKey] = useState(Date.now());

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg';

    const newMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [12.4964, 41.9028],
      zoom: 12,
      containerStyle: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    });
    setMap(newMap);
  }, [key]);

  function regenerateMap() {
    setKey(Date.now());
  }

  useEffect(() => {
    regenerateMap();
  }, []);

  return (
    <div key={key} ref={mapContainer} style={{ height: '100vh', overflow:"hidden"}} />
  );
}
