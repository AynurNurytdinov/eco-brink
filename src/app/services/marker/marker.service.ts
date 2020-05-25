import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import * as MapboxLanguage from '@mapbox/mapbox-gl-language' ;

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  points = '/assets/data/points.geojson';
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 55.8;
  lng = 49.1;
  zoom = 10;

  constructor(private http: HttpClient) { }

  buildMap() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.map = new mapboxgl.Map({
            accessToken: environment.mapbox.accessToken,
            container: 'map',
            style: this.style,
            zoom: this.zoom,
            center: [position.coords.longitude, position.coords.latitude]
          });
          this.map.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
              enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserLocation: true
          }), 'bottom-right');

          this.map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

          const scale = new mapboxgl.ScaleControl({
            maxWidth: 100,
            unit: 'metric'
          });
          this.map.addControl(scale, 'top-right');
        },
        error => {
          this.map = new mapboxgl.Map({
            accessToken: environment.mapbox.accessToken,
            container: 'map',
            style: this.style,
            zoom: this.zoom,
            center: [this.lng, this.lat]
          });
          this.map.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
              enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserLocation: true
          }), 'bottom-right');
          this.map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
          const  scale = new mapboxgl.ScaleControl({
            maxWidth: 100,
            unit: 'metric'
          });
          this.map.addControl(scale, 'top-right');
        }
      );
    }
  }

  makePointsMarkers(): void {
    this.http.get(this.points).subscribe((res: any) => {
      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const marker = new mapboxgl.Marker().setLngLat([lon, lat]).addTo(this.map);
        marker.getElement().addEventListener('click', (el) => {
          console.log(el);
        });
      }
    });
  }

  removeMap() {
    this.map.remove();
  }
}
