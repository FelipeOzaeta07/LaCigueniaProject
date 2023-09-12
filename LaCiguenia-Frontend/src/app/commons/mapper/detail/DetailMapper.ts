import { DetailEntity } from "@commons/domains/entity/detail/DetailEntity";
import { DetailModel } from "@commons/domains/model/detail/DetailModel";
import { Mapper } from "@commons/helpers/Mapper";

export class DetailMapper extends Mapper<DetailEntity, DetailModel>{
    override converterEntityToModel(params: DetailEntity): DetailModel {
        return{
            detailId: params.detailId,
            detailAmount: params.detailAmount,
            detailSubTotal: params.detailSubTotal,
            productEntity: params.productEntity,
            invoiceEntity: params.invoiceEntity
        };
    }
    override converterModelToEntity(params: DetailModel): DetailEntity {
        return{
            detailId: params.detailId,
            detailAmount: params.detailAmount,
            detailSubTotal: params.detailSubTotal,
            productEntity: params.productEntity,
            invoiceEntity: params.invoiceEntity
        };
    }
}