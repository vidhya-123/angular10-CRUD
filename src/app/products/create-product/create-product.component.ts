import { Component, OnInit } from '@angular/core'; 
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(
    private ProductsService: ProductsService
  ) { }

  ngOnInit(): void {
  }
  addProduct(form){
    let newProduct={
    id: form.value.productId,
    productName: form.value.productName,
    categoryId: form.value.catId,
    price: form.value.price,
    is_available: form.value.available
    };

    this.ProductsService.createProduct(newProduct).subscribe(data =>{
      console.log(data);
    })
  }

}
