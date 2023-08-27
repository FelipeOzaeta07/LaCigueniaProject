import { CategoryEntity } from "@commons/domains/entity/category/CategoryEntity";
import { InventoryEntity } from "@commons/domains/entity/inventory/InventoryEntity";

export interface ProductEntity{
    productId: number;
    productName: string;
    productPrice: string;
    productDescription: string;
    categoryEntity: CategoryEntity;
    inventoryEntity: InventoryEntity;
}