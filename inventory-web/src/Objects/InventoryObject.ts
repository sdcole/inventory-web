// Inventory.ts

export interface InventoryObject {
    inventoryID?: number;
    productID: number;
    actionID: number;
    quantityChanged: number;
    timestamp: Date;
  }
  

  export class InventoryObject implements InventoryObject {
    constructor(inventoryID: number, productID: number, actionID: number, quantityChanged: number, timestamp: Date) {
      this.inventoryID = inventoryID;
      this.productID = productID;
      this.actionID = actionID;
      this.quantityChanged = quantityChanged;
      this.timestamp = timestamp;
    }
  }