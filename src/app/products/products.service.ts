import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
import { Category } from '../site-framework/Categories';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  

  constructor( private httpClient:HttpClient) { }
  getAllProducts():Observable<Product>{
    const productUrl= 'http://localhost:3000/products';
    return this.httpClient.get<Product>(productUrl); 
  }

  getCategories():Observable<Category>{
    const catUrl= 'http://localhost:3000/category';
    return this.httpClient.get<Category>(catUrl); 

  }

  createProduct(productBody): Observable<Product>{
    const productUrl= 'http://localhost:3000/products';
    return this.httpClient.post<Product>(productUrl,productBody); 
  }

  viewProduct(productId): Observable<Product>{
    const productUrl= 'http://localhost:3000/products/'+productId;
    return this.httpClient.get<Product>(productUrl); 
  }

  updateProduct(productId,productBody): Observable<Product>{
    const productUrl= 'http://localhost:3000/products/'+productId;
    return this.httpClient.put<Product>(productUrl,productBody); 
  }

  deleteProduct(productId): Observable<Product>{
    const productUrl= 'http://localhost:3000/products/' + productId;
    return this.httpClient.delete<Product>(productUrl); 
  }
  
  searchDateProduct(dateparam): Observable<Product>{
    const productUrl= 'http://localhost:3000/products/date='+dateparam;
    return this.httpClient.get<Product>(productUrl); 
  }

  searchCategoryProduct(categoryId): Observable<Product>{
    const productUrl= 'http://localhost:3000/products?categoryId=' +categoryId;
    return this.httpClient.get<Product>(productUrl);

  }
}
  