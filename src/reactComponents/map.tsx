import {useEffect, useRef} from 'react';
import useMap from './hooks/useMap.ts';
import {City} from '../types/city.ts';
import leaflet from 'leaflet';
import {Point} from '../types/point.ts';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from './const.ts';


type MapProps = {
  city: City;
  className?: string;
  points: Point[];
  selectedPoint: Point;
}

function Map({city, className, points, selectedPoint}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.lat,
            lng: point.lng,
          },
          {
            icon: (selectedPoint && point.id === selectedPoint.id)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });

      map.setView([city.lat, city.lng], city.zoom);
    }
  }, [map, points, city]);

  return (
    <section
      className={className}
      ref={mapRef}
      style={{ height: '100%', width: '100%' }}
    >
    </section>
  );
}

export default Map;
