import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { supabase } from '../lib/supabaseClient';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Correção dos ícones padrão do Leaflet no React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor:[12, 41]
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
    <div className="h-full w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200">
      <MapContainer 
        center={[-22.01, -47.89] as [number, number]} 
        zoom={13} 
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {empreendimentos.map((e) => (
          // Só coloca pino se tiver lat e lng salvos no banco
          e.lat && e.lng ? (
            <Marker key={e.id} position={[parseFloat(e.lat), parseFloat(e.lng)]}>
              <Popup>
                <div className="font-bold text-sm">{e.nome}</div>
                <div className="text-xs text-gray-500">{e.empresa}</div>
              </Popup>
            </Marker>
          ) : null
        ))}
      </MapContainer>
    </div>
  );
}