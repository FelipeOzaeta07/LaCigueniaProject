import { DetailEntity } from "@commons/domains/entity/detail/DetailEntity";
import { DetailModel } from "@commons/domains/model/detail/DetailModel";
import { Mapper } from "@commons/helpers/Mapper";

export class DetailMapper extends Mapper<DetailEntity, DetailModel>{
    override converterEntityToModel(params: DetailEntity): DetailModel {
        return{
            detailId: params.detailId,
            detailAmount: params.detailAmount,
            detailSubtotal: params.detailSubtotal,
            productId: params.productId
        };
    }
    override converterModelToEntity(params: DetailModel): DetailEntity {
        return{
            detailId: params.detailId,
            detailAmount: params.detailAmount,
            detailSubtotal: params.detailSubtotal,
            productId: params.productId
        };
    }
}