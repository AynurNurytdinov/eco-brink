import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  shop = '/assets/data/shop.json';

  constructor(private http: HttpClient) { }

  load() {
    return this.http.get(this.shop);
  }
}
