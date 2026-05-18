import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { supabase } from '../lib/supabaseClient';
import L from 'leaflet';

// SOLUÇÃO: Usar ícone via CDN para evitar erro de 404
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function Mapa() {
  const [empreendimentos, setEmpreendimentos] = useState<any[]>([]);

  useEffect(() => {
    async function loadData() {
      const { data } = await supabase.from('empreendimentos').select('*');
      if (data) setEmpreendimentos(data);
    }
    loadData();
  },[]);

  return (
    // Altura fixa é obrigatória para o mapa aparecer!
    <div className="h-[500px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200">
      <MapContainer 
        center={[-22.01, -47.89]} 
        zoom={13} 
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {empreendimentos.map((e) => (
          e.lat && e.lng ? (
            <Marker key={e.id} position={[parseFloat(e.lat), parseFloat(e.lng)]}>
              <Popup>{e.nome || 'Sem nome'}</Popup>
            </Marker>
          ) : null
        ))}
      </MapContainer>
    </div>
  );
}