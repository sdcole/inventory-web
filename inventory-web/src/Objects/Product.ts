// Product.ts

export interface Product {
  productID?: number;
  productName: string;
  productDescription: string;
  productPrice: number;
  productQuantity: number;
  categoryID?: number | null;
  // Optionally, you can include other properties such as categoryID, imageURL, etc.
}

export class Product implements Product {
  constructor(productId: number, productName: string, productDescription: string, productPrice: number, productQuantity: number);
  constructor(productId: number, productName: string, productDescription: string, productPrice: number, productQuantity: number, categoryID: number);
  constructor(productId: number, productName: string, productDescription: string, productPrice: number, productQuantity: number, categoryID?: number) {
    this.productID = productId;
    this.productName = productName;
    this.productDescription = productDescription;
    this.productPrice = productPrice;
    this.productQuantity = productQuantity;
    this.categoryID = categoryID || null;
  }
}