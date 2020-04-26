import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-points-tab',
  templateUrl: 'points-tab.page.html',
  styleUrls: ['points-tab.page.scss']
})
export class PointsTabPage {
  map;
  view = 'map';
  constructor() {}

  ionViewDidEnter() {
    this.initMap();
  }

  initMap() {
    this.map = L.map('map', {
      center: [55.48, 50.8],
      zoom: 8,
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
  }

  ionViewWillLeave() {
    this.map.remove();
  }

  changeView() {
    this.view = this.view === 'map' ? 'list' : 'map';
  }
}



