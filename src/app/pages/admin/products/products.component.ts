import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../Services/Product/product.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule,],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  isNewProductVisible = false;
  productObj: any = {
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": new Date(),
    "deliveryTimeSpan": "",
    "categoryId": 2147483647,
    "productImageUrl": "",
    "userId": 0
  };

  categoryList: any[] = [];

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory() {
    this.ProductService.getCategory().subscribe((res: any) => {
      this.categoryList = res.data;
      console.log(this.categoryList);

    })
  }





  openNewProduct() {
    this.isNewProductVisible = true;
  }

  closeNewProduct() {
    this.isNewProductVisible = false;
  }
}
