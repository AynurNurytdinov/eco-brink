import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
  loading = true;
  products;
  constructor(private shopService: ShopService) {}

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
      this.load();
    }, 1000);
  }

  load() {
    this.shopService.load().subscribe(data => {
      this.products = data;
    });
  }
}
