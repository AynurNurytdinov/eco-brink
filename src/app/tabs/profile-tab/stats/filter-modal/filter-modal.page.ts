import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter-modal-page',
  templateUrl: './filter-modal.page.html'
})

export class FilterModalPage {

  constructor(private modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
}
