import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';

const Map = () => {
  const MapContainer: any = dynamic(
    () => {
      return import('react-leaflet').then((m) => m.MapContainer);
    },
    { loading: () => null, ssr: false }
  );

  const TileLayer: any = dynamic(
    () => {
      return import('react-leaflet').then((m) => m.TileLayer as any);
    },
    { loading: () => null, ssr: false }
  );

  return (
    <>
      <MapContainer
        center={[47.05191, 28.81658]}
        zoom={16}
        scrollWheelZoom={false}
        style={{ height: 347, width: 586, borderRadius: 16 }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </>
  );
};

export default Map;
