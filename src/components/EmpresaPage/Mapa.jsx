import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';


const Mapa = ({ latitud, longitud }) => {
  const position = [latitud, longitud];
  return (
    <MapContainer center={position} zoom={13} style={{ height: "50vh", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} />
    </MapContainer>
  );
}

export default Mapa;
