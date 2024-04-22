// Product.ts

export interface ProductObject {
  productID?: number;
  productName: string;
  productDescription: string;
  productPrice: number;
  productQuantity: number;
  categoryID?: number | null;
  // Optionally, you can include other properties such as categoryID, imageURL, etc.
}

export class ProductObject implements ProductObject {
  constructor(productID: number, productName: string, productDescription: string, productPrice: number, productQuantity: number);
  constructor(productID: number, productName: string, productDescription: string, productPrice: number, productQuantity: number, categoryID?: number) {
    this.productID = productID;
    this.productName = productName;
    this.productDescription = productDescription;
    this.productPrice = productPrice;
    this.productQuantity = productQuantity;
    this.categoryID = categoryID || null;
  }
}