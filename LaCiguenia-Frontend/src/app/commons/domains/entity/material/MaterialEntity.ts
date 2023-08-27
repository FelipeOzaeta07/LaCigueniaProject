import { ProductEntity } from "@commons/domains/entity/product/ProductEntity";

export interface MaterialEntity{
    materialId: number;
    materialName: string;
    materialDescription: string;
    productId: ProductEntity; 
}