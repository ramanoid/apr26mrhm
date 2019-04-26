import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Iproduct } from '../posts/posts.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private ps:ProductService) { }
  productItem = new Iproduct(null,null,null,null,null,null,null,null);

  ngOnInit() {
  }
AddProduct() {
  console.log(this.productItem)
  this.ps.newProduct(this.productItem);
  alert('Succes');
}
}
