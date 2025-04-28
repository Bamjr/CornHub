'use client'

import { LayersControl, MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useState } from 'react';




const iconUrl =
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";
const markerIcon = L.icon({
    iconUrl: iconUrl,
    iconSize: [20, 30],
});

type LatLng = [number, number]
type LocationMarkerProps = {
    position: LatLng | null
    setPosition: (position: LatLng) => void
}

function LocationMarker({ position, setPosition }: LocationMarkerProps) {
    const map = useMapEvents({
        click(e) {
            const newLocation: LatLng = [e.latlng.lat, e.latlng.lng]

            setPosition(newLocation);
            map.flyTo(e.latlng);
        },
    });

    return position === null ? null : (
        <Marker position={position} icon={markerIcon}>
            <Popup>You are here</Popup>
        </Marker>
    )
}

const MapLandmark = ({ location, }: { location?: { lat: number; lng: number }; }) => {
    const defaultLocation: LatLng = [13, 100]

    const [position, setPosition] = useState<LatLng | null >(null);
    console.log(position)
    return (
        <>
            <h1 className='mb-2 font-bold mt-2'>where that corn is? exactly</h1>
            <input
                type='hidden'
                name="lat" value={position ? position[0] : ''} />

            <input
                type='hidden'
                name="lng" value={position ? position[1] : ''} />

            

            <MapContainer
                className='h-[30vh] rounded-lg z-0 relative pad-4'
                center={location || defaultLocation}
                zoom={9}
                scrollWheelZoom={false}>


                <Marker position={location || defaultLocation} icon={markerIcon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <LocationMarker position={position} setPosition={setPosition} />

                <LayersControl>
                    <LayersControl.BaseLayer name='OpenStreetMap' checked>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>

                    <LayersControl.BaseLayer name='ESRI Imagery'>
                        <TileLayer
                            attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                            url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
                        />
                    </LayersControl.BaseLayer>
                </LayersControl>


            </MapContainer>
        </>
    )
}
export default MapLandmark