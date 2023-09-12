import { CategoryEntity } from "@commons/domains/entity/category/CategoryEntity";

export interface ProductEntity{
    productId: string;
    productName: string;
    productPrice: number;
    productDescription: string;
    categoryEntity: CategoryEntity;
}