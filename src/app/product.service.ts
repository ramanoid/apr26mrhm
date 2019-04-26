import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Iproduct } from './components/posts/posts.model';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
    
  getProducts(){
    return this.http.get('http://localhost:3000/products');

    
  }   
   
  newProduct(item) {
    return this.http.post('http://localhost:3000/details',{"product":item})
    .subscribe(data =>{console.log(data)});
   
  }
  
  constructor(private http : HttpClient) { }
}
