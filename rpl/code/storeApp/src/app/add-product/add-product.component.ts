import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from '../services/product-category.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  products: any = {};
  productCategories: any = [];
  constructor(
    private productsService: ProductsService,
    private productCategoriesService: ProductCategoryService
  ) {}

  ngOnInit(): void {
    this.getProductCategories();
  }
  async getProductCategories() {
    this.productCategories = await this.productCategoriesService.getAll();
  }
  async addProduct() {
    let docID = new Date().toTimeString();
    let res = await this.productsService.add(docID, this.products);
    if(res) alert('Produk berhasil ditambahkan.');
    else alert('Produk gagal ditambahkan.');
  }
}
