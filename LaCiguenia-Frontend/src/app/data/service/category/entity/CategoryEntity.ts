import { ProductEntity } from "../../product/entity/ProductEntity";

export interface CategoryEntity {
    categoryId: number,
    CategoryName: string,
    categoryDescription: string,
    listProducts: ProductEntity[],
}