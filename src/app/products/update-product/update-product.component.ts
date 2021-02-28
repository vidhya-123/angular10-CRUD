import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productId= 0;
  productDetails: any;

  constructor( private activatedRoute:ActivatedRoute, private productService:ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{ 
      this.productId = data.id;

    this.productService.viewProduct(this.productId).subscribe( productData =>{
      this.productDetails = productData;
    });
    });

  }
  updateProduct(form){
    const updateproductDetails = {
      id: form.value.productId,
      productName: form.value.productName,
      categoryId: form.value.catId,
      price: form.value.price,
      is_available: form.value.available

    }

    this.productService.updateProduct(this.productId,updateproductDetails).subscribe(data =>{
      console.log(data);
    })
  }

}

