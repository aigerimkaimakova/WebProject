import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor(
    private http: HttpClient
  ) { }

  private _url: string = "http://localhost:8000/api/cart/"
  private httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  addToCart(product) {
    this.items.push(product);
  }

  buyImage(image): Observable<any> {
    return this.http.post(this._url, image, this.httpHeaders)
  }

  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
