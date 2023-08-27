import { DetailModel } from "@commons/domains/model/detail/DetailModel";
import { DetailRepository } from "@repository/detail/DetailRepository";
import { Observable } from "rxjs";
import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";


export class DetailDeleteUseCase implements UseCase<DetailModel, GenericResponse>{

    constructor(private detailRepository: DetailRepository){}

    execute(params: {detailId: number}) : Observable<GenericResponse>{
        return this.detailRepository.deleteDetail(params);
    }
}