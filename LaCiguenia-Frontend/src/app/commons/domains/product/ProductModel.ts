import { CategoryModel } from "@commons/domains/category/CategoryModel";

export interface ProductModel{
    productId: number;
    productName: string;
    productPrice: number;
    productIva: number;
    productCost: number;
    productDescription: string;
    productStatus: string;
    categoryEntity: CategoryModel;
}