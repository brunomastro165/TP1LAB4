import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Mapa = ({ latitud, longitud }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      if (!mapInstanceRef.current) {
        mapInstanceRef.current = L.map(mapRef.current).setView(
          [latitud, longitud],
          13
        );

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(mapInstanceRef.current);

        L.marker([latitud, longitud]).addTo(mapInstanceRef.current);
      } else {
        mapInstanceRef.current.setView([latitud, longitud], 13);
      }
    }
  }, [latitud, longitud]);

  return (
    <>
      <h2 className="sm:mx-8 md:mx-40 lg:mx-80 my-6 text-blue-600 text-4xl font-semibold">
        DONDE ESTAMOS
      </h2>
      <div ref={mapRef} className="w-full h-96" />
    </>
  );
};

export default Mapa;
