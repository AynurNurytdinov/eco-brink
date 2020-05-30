import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilterModalPage } from '../filter-modal/filter-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-points-list',
  templateUrl: 'points-list.page.html',
  styleUrls: ['points-list.page.scss']
})
export class PointsListPage {
  points = '/assets/data/points.geojson';
  items;
  constructor(
    private http: HttpClient,
    public modalController: ModalController
  ) {}

  ionViewDidEnter() {
    this.load();
  }

  load() {
    this.http.get(this.points).subscribe((res: any) => {
      this.items = res.source.data.features;
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: FilterModalPage
    });
    return await modal.present();
  }
}



