import { CategoryEntity } from "@src/app/commons/domains/entity/category/CategoryEntity";

export interface ProductModel{
    productId: number,
    productName: string,
    productPrice: string,
    productDescription: string,
    categoryEntity: CategoryEntity,
}