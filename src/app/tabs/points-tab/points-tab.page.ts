import { Component } from '@angular/core';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { HttpClient } from '@angular/common/http';
import * as mapboxgl from 'mapbox-gl';
import Directions from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
// import * as MapboxDirections from '@mapbox/mapbox-gl-directions';
// var MapboxDirections = require('@mapbox/mapbox-gl-directions');
import { environment } from '../../../environments/environment';
import { ModalController } from '@ionic/angular';
import { FilterModalPage } from './filter-modal/filter-modal.page';

@Component({
  selector: 'app-points-tab',
  templateUrl: 'points-tab.page.html',
  styleUrls: ['points-tab.page.scss']
})
export class PointsTabPage {
  points = '/assets/data/points.geojson';
  map: mapboxgl.Map;
  directions;
  myLocation;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 55.8;
  lng = 49.1;
  zoom = 10;

  constructor(
    private http: HttpClient,
    public modalController: ModalController
  ) { }

  ionViewDidEnter() {
    this.buildMap();
  }

  ionViewWillLeave() {
    this.removeMap();
  }

  initMap() {
    this.map.on('load', () => {
      this.addControls();
      this.makePointsMarkers();
      this.map.on('click', e => {
        const f = this.map.queryRenderedFeatures(e.point, {layers: ['point']});
        if (f.length) {
          var feature = f[0];
          const popup = new mapboxgl.Popup()
            .setLngLat(feature.geometry.coordinates)
            .setHTML(this.ClickedGameObject(feature))
            .addTo(this.map);
          document.getElementById('btn-collectobj')
            .addEventListener('click', () => {
                console.log('clicked a button');
                this.createRoute(feature.geometry.coordinates);
            });
        }
      });
    });
  }

  buildMap() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.myLocation = [position.coords.longitude, position.coords.latitude];
          this.map = new mapboxgl.Map({
            accessToken: environment.mapbox.accessToken,
            container: 'map',
            style: this.style,
            zoom: this.zoom,
            center: [position.coords.longitude, position.coords.latitude]
          });
          this.initMap();
        },
        error => {
          this.map = new mapboxgl.Map({
            accessToken: environment.mapbox.accessToken,
            container: 'map',
            style: this.style,
            zoom: this.zoom,
            center: [this.lng, this.lat]
          });
          this.initMap();
        }
      );
    }
  }

  addControls() {
    this.map.addControl(new MapboxGeocoder({
      accessToken: environment.mapbox.accessToken,
      placeholder: 'Поиск',
      mapboxgl
    }), 'top-left');
    this.directions = new Directions({
      accessToken: environment.mapbox.accessToken,
      unit: 'metric',
      profile: 'mapbox/walking',
      controls: {instructions: false},
      placeholderOrigin: 'Откуда',
      placeholderDestination: 'Куда',
      interactive: false
    });
    this.map.addControl(this.directions, 'top-left');
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
  }

  makePointsMarkers() {
    this.http.get(this.points).subscribe((res: any) => {
      this.map.addLayer(res);
    });
  }

  removeMap() {
    this.map.remove();
  }

  ClickedGameObject(feature) {
    let html = '';
    html += '<h5>' + feature.properties.name + '</h5>';
    html += '<ion-subtitle>' + feature.properties.address + '(' + feature.properties.description + ')</ion-title>';
    html += '<ion-buttons slot=\'end\'>';
    html += '<ion-button id=\'btn-collectobj\'>';
    html += '<ion-icon name=\'navigate-outline\'></ion-icon>';
    html += '</ion-button>';
    html += '<ion-button>';
    html += '<ion-icon name=\'funnel-outline\'></ion-icon>';
    html += '</ion-button>';
    html += '<ion-button>';
    html += '<ion-icon name=\'time-outline\'></ion-icon>';
    html += '</ion-button>';
    html += '<ion-button>';
    html += '<ion-icon name=\'information-outline\'></ion-icon>';
    html += '</ion-button>';
    html += '</ion-buttons>';
    return html;
  }

  createRoute(coords) {
    this.directions.setOrigin(this.myLocation);
    this.directions.options.controls.instructions = true;
    this.directions.setDestination(coords);
    const element = document.getElementsByClassName('mapboxgl-popup');
    element[0].setAttribute('style', 'display: none;');
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: FilterModalPage
    });
    return await modal.present();
  }
}
