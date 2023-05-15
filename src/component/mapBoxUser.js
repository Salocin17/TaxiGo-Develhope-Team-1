import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export function MapBox() {
    const mapContainer = useRef(null);
    const [map, setMap] = useState(null);
    const [key, setKey] = useState(Date.now());


    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg';

        const newMap = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v12",
            center: [9.1859243, 45.4654219],
            zoom: 15,
            containerStyle: {
                
            },
        });

        const marker = new mapboxgl.Marker()
            .setLngLat([9.1859243, 45.4654219])
            .addTo(map);

        setMap(newMap);
    }, [key]);


    return (
        <div key={key} ref={mapContainer} style={{ height: '100vh', width: '100vw', overflow: 'hidden' }} />
    );
}