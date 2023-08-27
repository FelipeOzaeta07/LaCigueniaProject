import { Mapper } from "@commons/helpers/Mapper";
import { ProductEntity } from "@commons/domains/entity/product/ProductEntity";
import { ProductModel } from "@commons/domains/model/product/ProductModel";


export class ProductMapper extends Mapper<ProductEntity, ProductModel>{
    override converterEntityToModel(params: ProductEntity): ProductModel {
        return{
            productId: params.productId,
            productName: params.productName,
            productPrice: params.productPrice,
            productDescription: params.productDescription,
            categoryEntity: params.categoryEntity,
            inventoryEntity: params.inventoryEntity
        };
    }
    override converterModelToEntity(params: ProductModel): ProductEntity {
        return{
            productId: params.productId,
            productName: params.productName,
            productPrice: params.productPrice,
            productDescription: params.productDescription,
            categoryEntity: params.categoryEntity,
            inventoryEntity: params.inventoryEntity
        };
    }
}