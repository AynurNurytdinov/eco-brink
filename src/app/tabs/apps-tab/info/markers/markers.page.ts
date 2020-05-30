import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers.page.html',
  styles: [`
    ion-avatar {
      --border-radius: 0;
    }
  `]
})

export class MarkersModalPage {
  markers = '/assets/data/markers.json';
  items;
  constructor(
    private http: HttpClient,
    public modalCtrl: ModalController
  ) {}

  ionViewDidEnter() {
    this.load();
  }

  load() {
    this.http.get(this.markers).subscribe((res: any) => {
      this.items = res;
    });
  }
  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
}
