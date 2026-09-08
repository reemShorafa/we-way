import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const stops = [
  { coordinates: [31.520, 34.805], label: 'نقطة التجمع', kind: 'start' },
  { coordinates: [31.546, 34.863], label: 'استراحة', kind: 'stop' },
  { coordinates: [31.586, 34.930], label: 'الوجهة', kind: 'finish' },
];

const route = [
  [31.520, 34.805],
  [31.527, 34.826],
  [31.519, 34.846],
  [31.546, 34.863],
  [31.558, 34.890],
  [31.572, 34.901],
  [31.586, 34.930],
];

const markerIcon = kind => L.divIcon({
  className: 'weway-map-marker',
  html: `<span class="weway-map-marker__pin weway-map-marker__pin--${kind}"></span>`,
  iconSize: [34, 44],
  iconAnchor: [17, 41],
  tooltipAnchor: [0, 7],
});

export default function RealGlobeMap() {
  const mapElement = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (!mapElement.current) return undefined;

    const map = L.map(mapElement.current, {
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
    }).setView([31.552, 34.868], 12);
    mapInstance.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    L.control.zoom({ position: 'bottomleft' }).addTo(map);
    L.polyline(route, { color: '#ffffff', weight: 9, opacity: 0.88, lineCap: 'round' }).addTo(map);
    L.polyline(route, { color: '#2675c7', weight: 5, opacity: 1, lineCap: 'round', dashArray: '10 8' }).addTo(map);

    stops.forEach(stop => {
      L.marker(stop.coordinates, { icon: markerIcon(stop.kind), keyboard: false })
        .addTo(map)
        .bindTooltip(stop.label, { permanent: true, direction: 'bottom', className: 'weway-map-label' });
    });

    return () => {
      mapInstance.current = null;
      map.remove();
    };
  }, []);

  return (
    <div className="travel-map" aria-label="خريطة مسار رحلة WeWay">
      <div ref={mapElement} className="travel-map-canvas" />
      <div className="map-live"><span />الرحلة مباشرة</div>
    </div>
  );
}
