
import './App.css';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { useState, useEffect } from 'react';



const MapContainer = ({ google }) => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("https://all-json-server.herokuapp.com/Hotels")
      .then((d) => d.json())
      .then((data) => setHotels([...data]));
  }, []);


  return (
    <>
      <Map disableDefaultUI={true} google={google} style={{ width: "90%", height: "90%" }} zoom={2} initialCenter={{

        lat: 17.914881,
        lng: 77.504608
      }
      }>
        {hotels.map((e, i) => (
          <Marker key={i}
            title={e.restaurant_name}
            position={{ lat: e.longitude, lng: e.lattitude }} />
        ))}
      </Map>


    </>
  )
}


export default GoogleApiWrapper({
  apiKey: "AIzaSyBJh9MuLEy8VyFrXWQSS9IZiEEkW7Z5SRc"
})(MapContainer)
