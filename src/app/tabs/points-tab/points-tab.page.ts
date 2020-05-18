import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from 'src/app/services/marker/marker.service';

@Component({
  selector: 'app-points-tab',
  templateUrl: 'points-tab.page.html',
  styleUrls: ['points-tab.page.scss']
})
export class PointsTabPage {
  map;
  location = [55.7, 49.1];

  constructor(private markerService: MarkerService) {}

  ionViewDidEnter() {
    this.initMap();
    this.markerService.makePointsMarkers(this.map);
  }

  initMap() {
    this.map = L.map('map', {
      center: this.location,
      zoom: 10,
      zoomControl: false,
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    tiles.addTo(this.map);

    L.control.zoom({
      position: 'bottomright',
    }).addTo(this.map);
    this.map.locate({setView: true, maxZoom: 16})
      .on('locationfound', el => {
        this.location = [el.latitude, el.longitude];
        console.log(this.location);
      })
      .on('locationerror', el => {
        console.log('error', el);
      });
  }

  ionViewWillLeave() {
    this.map.remove();
  }

  backToLocation(){
    this.map.setView(this.location, 16);
}
}



