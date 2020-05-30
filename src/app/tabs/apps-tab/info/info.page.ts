import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MarkersModalPage } from './markers/markers.page';
import { PaperModalPage } from './paper/paper.page';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModalMarkers() {
    const modal = await this.modalController.create({
      component: MarkersModalPage
    });
    return await modal.present();
  }
  async presentModalPaper() {
    const modal = await this.modalController.create({
      component: PaperModalPage
    });
    return await modal.present();
  }
  
}
