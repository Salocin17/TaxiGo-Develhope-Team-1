import { useEffect, useState } from "react";
import * as turf from "@turf/turf"

export function useDistance(start, end, status=false, center="") {
    const [distance, setDistance] = useState();
    const [startPoint, setStartPoint] = useState()
    const [endPoint, setEndPoint] = useState()
    
    const street = async (data) =>{
        const result = await fetch(`http://localhost:3300/api/aStreet/${data}`)
        const responce = await result.json()
        return responce.street.name
    }
  
    const coordinates = async (street) =>{
        const name = street.split(" ")
        let responce1
        switch(name.length){
          case 2: responce1 = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name[0]}%20${name[1]}%2020124.json?access_token=pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg` ); break;
          case 3: responce1 = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name[0]}%20${name[1]}%20${name[2]}%2020124.json?access_token=pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg` ); break;
          case 4: responce1 = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name[0]}%20${name[1]}%20${name[2]}%20${name[3]}%2020124.json?access_token=pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg` ); break;
          case 5: responce1 = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name[0]}%20${name[1]}%20${name[2]}%20${name[3]}%20${name[4]}%2020124.json?access_token=pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg` ); break;
          case 6: responce1 = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${name[0]}%20${name[1]}%20${name[2]}%20${name[3]}%20${name[4]}%20${name[5]}%2020124.json?access_token=pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg` ); break;
        }
    
        const place1 = await responce1.json()
        return place1.features[0].center
    
    }

    async function getRoute(start,end) {
        const query = await fetch(
          `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=pk.eyJ1IjoiY2FtZWxpYTk3IiwiYSI6ImNsaDU3Y3dodjA2NW4zZXBlbHluMXByc3AifQ.DRw1llh3YM_HfCOFpSGgHg`,
          { method: 'GET' }
        );
        const json = await query.json();
        const data = json.routes[0];
        return data.geometry.coordinates;
    }
    
    useEffect(() => {
        const data = async() => {
            if(status){
                setStartPoint(await coordinates(await street(center)))
            }else{
                setStartPoint(await coordinates(start))
            }
           
            setEndPoint(await coordinates(end))
        }
        data()
    },[start,end])

    useEffect(() => {
        if(startPoint && endPoint){
            const distance = async () =>{
                let line = turf.lineString(await getRoute(startPoint,endPoint));
                
                let point1 = turf.point(startPoint);
                let point2 = turf.point(endPoint);
                
                var snapped1 = turf.nearestPointOnLine(line, point1, {units: 'kilometers'});      
                var snapped2 = turf.nearestPointOnLine(line, point2, {units: 'kilometers'});
                setDistance((Math.abs(snapped1.properties.location - snapped2.properties.location).toFixed(1)))
            }
            distance()
        }
    },[startPoint, endPoint])

    console.log(distance)
    return distance;
  }