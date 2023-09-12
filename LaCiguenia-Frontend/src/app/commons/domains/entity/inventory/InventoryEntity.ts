import { ProductModel } from "@commons/domains/model/product/ProductModel";

export interface InventoryEntity{
    inventoryId: number;
    inventoryAmount: number;
    inventoryEntryDate: string;
    productEntity: ProductModel;
}