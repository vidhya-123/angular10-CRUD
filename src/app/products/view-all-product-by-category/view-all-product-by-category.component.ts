import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product';


@Component({
  selector: 'app-view-all-product-by-category',
  templateUrl: './view-all-product-by-category.component.html',
  styleUrls: ['./view-all-product-by-category.component.css']
})
export class ViewAllProductByCategoryComponent implements OnInit {
  sarchCategory: any;
  productList: any;

  constructor( 
                private activatedRoute:ActivatedRoute ,
                private productService: ProductsService,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.sarchCategory= data.id;
      
    this.productService.searchCategoryProduct(this.sarchCategory).subscribe( categoryData=>{
      this.productList= categoryData;
    })
    })


  }

}
