import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
interface Products {
  id: string;
  name: string;
  id_category: string;
  price: number;
}
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private firestore: AngularFirestore) {}

  async getAll() {
    let data: any = [];
    let products = await this.firestore
      .collection<Products>('products')
      .get()
      .toPromise();
    products.forEach((val) => {
      let dataValue = {
        id: val.id,
        name: val.data().name,
        id_category: val.data().id_category,
        price: val.data().price,
      };
      data.push(dataValue);
    });
    return data;
  }
  async getProductByCategory(id_category: any) {
    let data: any = [];
    let products = await this.firestore
      .collection<Products>('products', (ref) => {
        return ref.where('id_category', '==', id_category);
      })
      .get()
      .toPromise();
    products.forEach((val) => {
      let dataValue = {
        id: val.id,
        name: val.data().name,
        id_category: val.data().id_category,
        price: val.data().price,
      };
      data.push(dataValue);
    });
    return data;
  }
  async getOne(id: any) {
    let data = await this.firestore
      .collection('products')
      .doc(id)
      .get()
      .toPromise();
    return data.data();
  }
  async add(id: any, data: any) {
    let result = await this.firestore.collection('products').doc(id).set(data).then(res=>{
      return true;
    }).catch(err=>{
      return false;
    })
    return result;
  }
  async update(id: any, data: any) {
    let result = await this.firestore
      .collection('products')
      .doc(id)
      .update(data);
    return result;
  }
  async delete(id: any) {
    let result = await this.firestore.collection('products').doc(id).delete();
    return result;
  }
}
