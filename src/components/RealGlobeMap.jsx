import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const stops = [
  {
    coordinates: [31.520, 34.805],
    arLabel: 'نقطة التجمع',
    enLabel: 'Meeting point',
    kind: 'start',
  },
  {
    coordinates: [31.546, 34.863],
    arLabel: 'استراحة',
    enLabel: 'Rest stop',
    kind: 'stop',
  },
  {
    coordinates: [31.586, 34.930],
    arLabel: 'الوجهة',
    enLabel: 'Destination',
    kind: 'finish',
  },
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

export default function RealGlobeMap({ ar }) {
  const mapElement = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (!mapElement.current) return undefined;

    const map = L.map(mapElement.current, {
      zoomControl: false,
      scrollWheelZoom: false,
    }).setView([31.552, 34.868], 12);
    mapInstance.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    L.control.zoom({ position: 'bottomleft' }).addTo(map);

    // Draw a highlighted route above the light base line.
    L.polyline(route, { color: '#ffffff', weight: 9, opacity: 0.88, lineCap: 'round' }).addTo(map);
    L.polyline(route, { color: '#2675c7', weight: 5, opacity: 1, lineCap: 'round', dashArray: '10 8' }).addTo(map);

    // Attach readable labels to the main route stops.
    stops.forEach(stop => {
      L.marker(stop.coordinates, { icon: markerIcon(stop.kind), keyboard: false })
        .addTo(map)
        .bindTooltip(ar ? stop.arLabel : stop.enLabel, {
          permanent: true,
          direction: 'bottom',
          className: 'weway-map-label',
        });
    });

    return () => {
      mapInstance.current = null;
      map.remove();
    };
  }, [ar]);

  return (
    <div className="travel-map" aria-label={ar ? 'خريطة مسار رحلة WeWay' : 'WeWay trip route map'}>
      <div ref={mapElement} className="travel-map-canvas" />
      <div className="map-live"><span />{ar ? 'الرحلة مباشرة' : 'Trip is live'}</div>
    </div>
  );
}
