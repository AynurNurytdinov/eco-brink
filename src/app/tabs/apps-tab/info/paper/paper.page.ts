import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paper-page',
  templateUrl: './paper.page.html',
  styles: [`
    ion-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  `]
})

export class PaperModalPage {
  constructor(
    public modalCtrl: ModalController
  ) {}

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
}
