// import { TileLayer } from 'react-leaflet';
// import { Map } from 'react-leaflet-universal';
// import { Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import dynamic from 'next/dynamic'
import L from 'leaflet'
import MarkerIcon from '../../../public/svg/Marker.svg'
import MapIcon from './MapIcon'
// import icon from 'leaflet/dist/images'
// import iconShadow from 'leaflet/dist/images/marker-icon.png'

// let DefaultIcon = L.icon({
//     iconUrl: icon,
//     shadowUrl: iconShadow
// });

const Map = () => {
  const MapContainer: any = dynamic(
    () => {
      return import('react-leaflet').then((m) => m.MapContainer)
    },
    { loading: () => null, ssr: false }
  )

  const TileLayer: any = dynamic(
    () => {
      return import('react-leaflet').then((m) => m.TileLayer as any)
    },
    { loading: () => null, ssr: false }
  )

  const Marker: any = dynamic(
    () => {
      return import('react-leaflet').then((m) => m.Marker)
    },
    { loading: () => null, ssr: false }
  )

  const Popup: any = dynamic(
    () => {
      return import('react-leaflet').then((m) => m.Popup)
    },
    { loading: () => null, ssr: false }
  )

  // const Icon: any = dynamic(
  //   () => {
  //     return import('leaflet').then((m) => m.Icon as any)
  //   },
  //   { loading: () => null, ssr: false }
  // )

  return (
    <>
      <MapContainer
        center={[47.05191, 28.81658]}
        zoom={16}
        scrollWheelZoom={false}
        style={{ height: 347, width: 586 }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[47.05191, 28.81658]}
          // icon={MapIcon}
        ></Marker>
      </MapContainer>
    </>
  )
}

export default Map

// L.Marker.prototype.options.icon = DefaultIcon;
