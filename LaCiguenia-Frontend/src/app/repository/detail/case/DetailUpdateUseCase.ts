import { DetailModel } from "@commons/domains/model/detail/DetailModel";
import { DetailRepository } from "@repository/detail/DetailRepository";
import { UseCase } from "@commons/helpers/UserCase";
import { Observable } from "rxjs";
import { GenericResponse } from "@commons/response/GenericResponse";

export class DetailCreateUseCase implements UseCase<DetailModel, GenericResponse>{

    constructor(private detailRepository: DetailRepository){}

    execute(detailModel: DetailModel) : Observable<GenericResponse>{
        return this.detailRepository.updateDetail(detailModel);
    }
}