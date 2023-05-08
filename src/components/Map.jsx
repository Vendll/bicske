import { useState, useEffect } from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, useMap, Popup } from 'react-leaflet'

export function ChangeView({ coords }) {
  const map = useMap()
  map.setView(coords, 16)
  return null
}

export default function Map() {
  const [geoData, setGeoData] = useState({ lat: 47.492193, lng: 18.635918 })
  const center = [geoData.lat, geoData.lng]
  return (
    <MapContainer center={center} zoom={16} style={{ height: '50vh' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geoData.lat && geoData.lng && (
        <Marker position={[geoData.lat, geoData.lng]}>
          <Popup>
            Bicskei Egészségügyi Központ <br /> 2060 Bicske, Kossuth tér 17.
          </Popup>
        </Marker>
      )}
      <ChangeView coords={center} />
    </MapContainer>
  )
}
