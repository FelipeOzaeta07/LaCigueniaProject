import { CategoryEntity } from "@src/app/commons/domains/entity/category/CategoryEntity";

export interface ProductEntity{
    productId: number,
    productName: string,
    productPrice: string,
    productDescription: string,
    categoryEntity: CategoryEntity,
}