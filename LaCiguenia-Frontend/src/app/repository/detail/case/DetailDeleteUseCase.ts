import { DetailModel } from "@commons/domains/detail/DetailModel";
import { DetailRepository } from "@repository/detail/DetailRepository";
import { Observable } from "rxjs";
import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";


export class DetailDeleteUseCase implements UseCase<number, GenericResponse>{

    constructor(private detailRepository: DetailRepository){}

    execute(detailId: number) : Observable<GenericResponse>{
        return this.detailRepository.deleteDetail(detailId);
    }
}