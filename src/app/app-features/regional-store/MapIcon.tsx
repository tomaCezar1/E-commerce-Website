import L from 'leaflet'

const MapIcon = new L.Icon({
  iconUrl: require('../../../../public/svg/MapIcon.svg'),
  iconRetinaUrl: require('../../../../public/svg/MapIcon.svg'),
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
  className: 'leaflet-div-icon',
})

export default MapIcon
