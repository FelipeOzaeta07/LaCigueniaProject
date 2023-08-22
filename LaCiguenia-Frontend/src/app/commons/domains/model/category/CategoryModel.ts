import { ProductEntity } from "@src/app/commons/domains/entity/product/ProductEntity";

export interface CategoryModel {
    categoryId: number,
    categoryName: string,
    categoryDescription: string,
    listProducts: ProductEntity[]
}