import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get('https://fakestoreapi.com/products');
  }
  getProductById(id:any) {
    return this.http.get('https://fakestoreapi.com/products'+'products/'+id);
  }
}
