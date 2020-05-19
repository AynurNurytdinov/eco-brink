import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-post',
  templateUrl: './news-post.page.html',
  styleUrls: ['./news-post.page.scss'],
})
export class NewsPostPage implements OnInit {

  item;

  constructor(
    private newsService: NewsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.load(id);
  }

  load(id) {
    this.newsService.load().toPromise().then(data => {
      this.item = data;
      this.item = this.item.filter(el => {
        return el.id === +id;
      });
    });
  }
}
