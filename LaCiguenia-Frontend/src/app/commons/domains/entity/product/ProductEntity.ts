import { CategoryEntity } from "@commons/domains/entity/category/CategoryEntity";

export interface ProductEntity{
    productCode: string;
    productName: string;
    productPrice: number;
    productDescription: string;
    categoryEntity: CategoryEntity;
}