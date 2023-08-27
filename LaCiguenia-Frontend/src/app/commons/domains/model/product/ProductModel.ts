import { CategoryModel } from "@commons/domains/model/category/CategoryModel";
import { InventoryModel } from "@commons/domains/model/inventory/InventoryModel";

export interface ProductModel{
    productId: number;
    productName: string;
    productPrice: string;
    productDescription: string;
    categoryEntity: CategoryModel;
    inventoryEntity: InventoryModel;
}