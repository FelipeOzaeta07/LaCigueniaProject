import { DetailModel } from "@commons/domains/detail/DetailModel";
import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { DetailRepository } from "@repository/detail/DetailRepository";
import { Observable } from "rxjs";

export class DetailProductoMoreSoldUseCase implements UseCase<number, GenericResponse>{

    constructor(private detailRepository: DetailRepository){}

    execute(storeId: number) : Observable<GenericResponse>{
        return this.detailRepository.detailProductoMoreSold(storeId);
    }
}