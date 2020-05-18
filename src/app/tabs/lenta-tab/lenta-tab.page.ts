import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-lenta-tab',
  templateUrl: 'lenta-tab.page.html',
  styleUrls: ['lenta-tab.page.scss']
})
export class LentaTabPage implements OnInit {
  loading = true;
  items;
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
      this.load();
    }, 2000);
  }

  refresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  load() {
    this.newsService.load().subscribe(data => {
      this.items = data;
    });
  }
}
