import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  points = '/assets/data/points.geojson';

  constructor(private http: HttpClient) { }

  makePointsMarkers(map: L.map): void {
    this.http.get(this.points).subscribe((res: any) => {
      for (const c of res.features) {
        const lat = c.geometry.coordinates[0];
        const lon = c.geometry.coordinates[1];
        const marker = L.marker([lon, lat]).bindPopup(c.properties.name).addTo(map);
      }
    });
  }
}
