import { ProductModel } from "../product/ProductModel";

export interface InventoryModel{
    inventoryId: number;
    inventoryAmount: number;
    inventoryEntryDate: string;
    productEntity: ProductModel;
}