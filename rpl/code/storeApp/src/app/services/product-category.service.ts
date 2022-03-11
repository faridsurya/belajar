import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

interface ProductCategories {
  id_category: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductCategoryService {
  constructor(private firestore: AngularFirestore) {}

  async getAll() {
    let data: any = [];
    let products = await this.firestore
      .collection<ProductCategories>('products')
      .get()
      .toPromise();
    products.forEach((val) => {
      let dataValue = {
        id_category: val.id,
        name: val.data().name,
      };
      data.push(dataValue);
    });
    return data;
  }
  async getOne() {}
  async add() {}
  async update() {}
  async delete() {}
}
