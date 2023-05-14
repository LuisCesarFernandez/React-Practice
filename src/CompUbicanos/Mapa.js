import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./mapa.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconshadow from "leaflet/dist/images/marker-icon.png";
export function Ubicacion() {
  let icono = new L.icon({
    iconUrl: icon,
    iconshadow: iconshadow,
    iconSize: [30, 25],
    iconAnchor: "null",
    shadowAnchor: "null",
    shadowUrl: "null",
    popupAnchor: "null",
    className: "leaflet-venue-icon",
  });
  const position = [-12.0516797, -77.034641];
  return (
    <div className="cont">
      <h1>¿Donde estamos?</h1>
      <MapContainer
        center={position}
        zoom={18}
        scrollWheelZoom={false}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={icono}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}