import { UseCase } from "@commons/helpers/UserCase";
import { DetailRepository } from "@repository/detail/DetailRepository";
import { Observable } from "rxjs";
import { GenericResponse } from "@commons/response/GenericResponse";

export class DetailReadUseCase implements UseCase<number, GenericResponse>{

    constructor(private detailRepository: DetailRepository){}

    execute(detailId: number) : Observable<GenericResponse>{
        return this.detailRepository.readDetail(detailId);
    }
}