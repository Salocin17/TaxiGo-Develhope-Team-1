import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import * as turf from "@turf/turf"

export function MapBoxTaxi(props) {

  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {

    async function data(){
      const name = props.center.split(" ")
      let responce1
      switch(name.length){
        case 2: responce1 = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name[0]}%20${name[1]}%2020124.json?access_token=pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg` ); break;
        case 3: responce1 = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name[0]}%20${name[1]}%20${name[2]}%2020124.json?access_token=pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg` ); break;
        case 4: responce1 = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name[0]}%20${name[1]}%20${name[2]}%20${name[3]}%2020124.json?access_token=pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg` ); break;
        case 5: responce1 = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name[0]}%20${name[1]}%20${name[2]}%20${name[3]}%20${name[4]}%2020124.json?access_token=pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg` ); break;
        case 6: responce1 = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name[0]}%20${name[1]}%20${name[2]}%20${name[3]}%20${name[4]}%20${name[5]}%2020124.json?access_token=pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg` ); break;
      }
  
      const place1 = await responce1.json()
      const center = place1.features[0].center
      
      console.log(center)
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: center,
        zoom: 12
        });

      map.current.on('load', async () => {
        const marker1 = new mapboxgl.Marker({color: "green"})
          .setLngLat(center)
          .addTo(map.current);
      })

      if(props.destination){
        let destination 
        map.current.on('load', async () => {

          const name = props.destination.split(" ")
          let responce1
          switch(name.length){
            case 2: responce1 = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name[0]}%20${name[1]}%2020124.json?access_token=pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg` ); break;
            case 3: responce1 = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name[0]}%20${name[1]}%20${name[2]}%2020124.json?access_token=pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg` ); break;
            case 4: responce1 = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name[0]}%20${name[1]}%20${name[2]}%20${name[3]}%2020124.json?access_token=pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg` ); break;
            case 5: responce1 = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name[0]}%20${name[1]}%20${name[2]}%20${name[3]}%20${name[4]}%2020124.json?access_token=pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg` ); break;
            case 6: responce1 = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name[0]}%20${name[1]}%20${name[2]}%20${name[3]}%20${name[4]}%20${name[5]}%2020124.json?access_token=pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg` ); break;
          }

          const place1 = await responce1.json()
          destination = place1.features[0].center
        
          const marker1 = new mapboxgl.Marker({color: "red"})
            .setLngLat(destination)
            .addTo(map.current);

          getRoute(center, destination);
        })
       
      }
   
    }

    data()

},[props.center]);

async function getRoute(start,end) {

  const options = {units: 'miles'};

  const distance = turf.distance(start, end, options);

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
  if (map.current.getSource('route')) {
    map.current.getSource('route').setData(geojson);
  }
  else {
    map.current.addLayer({
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
  return (
    mapContainer !== null && <div
      ref={mapContainer}
      style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, overflow: 'hidden' }}
    />
  );
}