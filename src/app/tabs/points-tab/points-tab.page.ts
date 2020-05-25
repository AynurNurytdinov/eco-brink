import { Component } from '@angular/core';
import { MarkerService } from 'src/app/services/marker/marker.service';

@Component({
  selector: 'app-points-tab',
  templateUrl: 'points-tab.page.html',
  styleUrls: ['points-tab.page.scss']
})
export class PointsTabPage {

  constructor(private map: MarkerService) { }

  ionViewDidEnter() {
    this.map.buildMap();
    this.map.makePointsMarkers();
  }

  ionViewWillLeave() {
    this.map.removeMap();
  }
}



