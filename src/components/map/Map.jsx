"use client";

// IMPORTANT: the order matters!
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import { MapContainer, TileLayer } from "react-leaflet";
import {
  BOUNDS,
  CENTER_POS,
  DEFAULT_ZOOM,
  MAX_BOUNDS,
  MAX_ZOOM,
  MIN_ZOOM,
  TILE_SIZE,
} from "@/constants/mapSettings";

import ExactIconPlacing from "./ExactIconPlacing";

export default function Map() {
  return (
    <MapContainer
      id="map-container"
      maxBoundsViscosity={1}
      attributionControl={false}
      crs={L.CRS.Simple}
      zoomSnap={0}
      minZoom={MIN_ZOOM}
      maxZoom={MAX_ZOOM}
      zoom={DEFAULT_ZOOM}
      center={CENTER_POS}
      maxBounds={MAX_BOUNDS}
      scrollWheelZoom={true}
      className={`w-full h-full`}
    >
      <TileLayer
        bounds={BOUNDS}
        maxNativeZoom={4}
        tileSize={TILE_SIZE}
        url="/map/{z}/{y}/{x}.png"
        keepBuffer={64 }
      />
      <ExactIconPlacing />
    </MapContainer>
  );
}