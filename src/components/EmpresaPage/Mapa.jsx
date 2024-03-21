import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export const Mapa = ({ latitud, longitud }) => {

  const defaultCenter = {
    lat: latitud, lng: longitud
  }
  return (
    <div className=' my-6 h-auto'>
      <h2 className='sm:mx-8 md:mx-40 lg:mx-80 my-10 text-blue-600 text-4xl font-semibold'>DONDE ESTAMOS</h2>
      <LoadScript
        googleMapsApiKey='TU_API_KEY'>
        <GoogleMap
          className="w-full h-10 "
          zoom={13}
          center={defaultCenter}
        />
      </LoadScript>
      <iframe
        src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d379.93815540477334!2d-68.84151362942852!3d-32.9180891213319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e096419f1e643%3A0xab605a1994f1b6b6!2sMontecaseros%20470%2C%20M5504BBX%20Godoy%20Cruz%2C%20Mendoza!5e0!3m2!1ses!2sar!4v1710980249730!5m2!1ses!2sar"}
        className="w-full h-96 rounded-xl"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
export default Mapa;