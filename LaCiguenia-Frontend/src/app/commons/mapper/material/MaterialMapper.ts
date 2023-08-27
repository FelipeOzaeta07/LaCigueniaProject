import { MaterialEntity } from "@commons/domains/entity/material/MaterialEntity";
import { MaterialModel } from "@commons/domains/model/material/MaterialModel";
import { Mapper } from "@commons/helpers/Mapper";

export class MaterialMapper extends Mapper<MaterialEntity, MaterialModel>{
    override converterEntityToModel(params: MaterialEntity): MaterialModel {
        return{
            materialId: params.materialId,
            materialName: params.materialName,
            materialDescription: params.materialDescription,
            productId: params.productId
        };
    }
    override converterModelToEntity(params: MaterialModel): MaterialEntity {
        return{
            materialId: params.materialId,
            materialName: params.materialName,
            materialDescription: params.materialDescription,
            productId: params.productId
        };
    }
}