import { Mapper } from "@commons/helpers/Mapper";
import { ProductEntity } from "@commons/domains/entity/product/ProductEntity";
import { ProductModel } from "@commons/domains/model/product/ProductModel";


export class ProductMapper extends Mapper<ProductEntity, ProductModel>{
    override converterEntityToModel(params: ProductEntity): ProductModel {
        return{
            productCode: params.productCode,
            productName: params.productName,
            productPrice: params.productPrice,
            productDescription: params.productDescription,
            categoryEntity: params.categoryEntity
        };
    }
    override converterModelToEntity(params: ProductModel): ProductEntity {
        return{
            productCode: params.productCode,
            productName: params.productName,
            productPrice: params.productPrice,
            productDescription: params.productDescription,
            categoryEntity: params.categoryEntity
        };
    }
}