import { ProductEntity } from "@src/app/commons/domains/entity/product/ProductEntity";

export interface CategoryEntity {
    categoryId: number,
    CategoryName: string,
    categoryDescription: string,
    listProducts: ProductEntity[]
}