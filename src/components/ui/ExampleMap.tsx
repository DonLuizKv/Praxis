import { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

export default function MapExample() {
    const [position, setPosition] = useState([19.4326, -99.1332]); // CDMX por default
    const [address, setAddress] = useState("");

    const searchAddress = async () => {
        const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&countrycodes=usa&q=${address}`);
        const data = await res.json();
        if (data && data.length > 0) {
            const { lat, lon } = data[0];
            setPosition([parseFloat(lat), parseFloat(lon)]);
        } else {
            alert("Dirección no encontrada en México");
        }
    };


    return (
        <div className="flex flex-col gap-4">
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Ingresa una dirección"
                className="border p-2"
            />
            <button onClick={searchAddress} className="bg-blue-500 text-white p-2 rounded">
                Buscar
            </button>

            <div style={{ height: "300px", width: "100%" }}>
                <MapContainer
                    style={{ height: "100%", width: "100%" }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position} />
                </MapContainer>
            </div>
        </div>
    );
}
