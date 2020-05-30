import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter-points-modal-page',
  templateUrl: './filter-modal.page.html'
})

export class FilterModalPage {
  type = 'all';

  constructor(private modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  segmentChanged(ev: any) {
    this.type = ev.detail.value;
  }
}
