import { OpeningEntity } from "@commons/domains/entity/opening/OpeningEntity";
import { OpeningModel } from "@commons/domains/model/opening/OpeningModel";
import { Mapper } from "@commons/helpers/Mapper";

export class OpeningMapper extends Mapper<OpeningEntity, OpeningModel>{
    override converterEntityToModel(params: OpeningEntity): OpeningModel {
        return{
            openingId: params.openingId,
            openingDate: params.openingDate,
            openingStore: params.openingStore,
            openingTotal: params.openingTotal
        };
    }
    override converterModelToEntity(params: OpeningModel): OpeningEntity {
        return{
            openingId: params.openingId,
            openingDate: params.openingDate,
            openingStore: params.openingStore,
            openingTotal: params.openingTotal
        };
    }
}