import { ProductModel } from "@commons/domains/model/product/ProductModel";

export interface MaterialModel{
    materialId: number;
    materialName: string;
    materialDescription: string;
    productId: ProductModel; 
}