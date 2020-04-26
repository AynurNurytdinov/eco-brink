import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lenta-tab',
  templateUrl: 'lenta-tab.page.html',
  styleUrls: ['lenta-tab.page.scss']
})
export class LentaTabPage implements OnInit {
  loading = true;
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  refresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
