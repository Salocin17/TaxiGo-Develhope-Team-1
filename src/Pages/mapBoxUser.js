import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import * as turf from "@turf/turf"

mapboxgl.accessToken = 'pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg';

export function MapBoxUser(props) {
    const mapContainer2 = useRef(null);
    const map2 = useRef(null);

    useEffect(() => {
          map2.current = new mapboxgl.Map({
          container: mapContainer2.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: props.street,
          zoom: 15
          });
      },[]);
      
      async function getRoute(start,end) {
   
        const query = await fetch(
          `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg`,
          { method: 'GET' }
        );
    
        const json = await query.json();
        const data = json.routes[0];
        const route = data.geometry.coordinates;
        const geojson = {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: route
          }
        };
        if (map2.current.getSource('route')) {
          map2.current.getSource('route').setData(geojson);
        }
        else {
          map2.current.addLayer({
            id: 'route',
            type: 'line',
            source: {
              type: 'geojson',
    
              
              data: geojson
            },
            layout: {
              'line-join': 'round',
              'line-cap': 'round'
            },
            paint: {
              'line-color': '#3887be',
              'line-width': 8,
              'line-opacity': 0.75
            }
          });
        }
      }
 

    useEffect(() => {
        map2.current.on('load', async () => {
            const marker1 = new mapboxgl.Marker({color: "green"})
                .setLngLat(props.street)
                .addTo(map2.current);
        })

    },[]);

    useEffect(() => {
        map2.current.on('load', async () => {
            const marker1 = new mapboxgl.Marker({color: "red"})
                .setLngLat(props.destination)
                .addTo(map2.current);
        })

        getRoute(props.street, props.destination);
       
    },[props.destination]);

    return (
        <div
            ref={mapContainer2} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, overflow: 'hidden'}}
        />
    );
}