import { CategoryModel } from "@commons/domains/model/category/CategoryModel";

export interface ProductModel{
    productCode: string;
    productName: string;
    productPrice: string;
    productDescription: string;
    categoryEntity: CategoryModel;
}