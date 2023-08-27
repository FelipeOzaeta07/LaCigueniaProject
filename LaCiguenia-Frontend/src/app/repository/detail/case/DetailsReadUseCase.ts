import { DetailModel } from "@commons/domains/model/detail/DetailModel";
import { DetailRepository } from "@repository/detail/DetailRepository";
import { Observable } from "rxjs";
import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";


export class DetailsReadUseCase implements UseCase<DetailModel, GenericResponse>{

    constructor(private detailRepository: DetailRepository){}

    execute() : Observable<GenericResponse>{
        return this.detailRepository.readDetailes();
    }
}