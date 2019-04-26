import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import {Iproduct} from 'src/app/components/posts/posts.model'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers:[ProductService]
})

export class PostsComponent implements OnInit {

  constructor(private ps:ProductService ) { }
  products:Iproduct[];
  ngOnInit() :void{
    
    this.ps.getProducts().subscribe((data)=>{
      this.products= JSON.parse(JSON.stringify(data));
    })
    
  }

}