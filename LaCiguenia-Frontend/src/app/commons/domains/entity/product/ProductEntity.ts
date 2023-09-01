import { CategoryEntity } from "@commons/domains/entity/category/CategoryEntity";

export interface ProductEntity{
    productCode: string;
    productName: string;
    productPrice: string;
    productDescription: string;
    categoryEntity: CategoryEntity;
}