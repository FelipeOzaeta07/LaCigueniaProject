import { CategoryModel } from "@commons/domains/model/category/CategoryModel";

export interface ProductModel{
    productCode: string;
    productName: string;
    productPrice: number;
    productDescription: string;
    categoryEntity: CategoryModel;
}