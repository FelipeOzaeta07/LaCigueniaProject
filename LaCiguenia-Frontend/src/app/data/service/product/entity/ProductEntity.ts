import { CategoryEntity } from "../../category/entity/CategoryEntity";

export interface ProductEntity{
    idProduct: number,
    productName: string,
    productPrice: string,
    productDescription: string,
    productMaterials: string,
    categoryEntity: CategoryEntity
}