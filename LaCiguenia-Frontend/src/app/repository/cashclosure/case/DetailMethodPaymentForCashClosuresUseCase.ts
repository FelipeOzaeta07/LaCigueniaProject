import { CashClosureModel } from "@commons/domains/cashclosure/CashClosureModel";
import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { CashClosureRepository } from "@repository/cashclosure/CashClosureRepository";
import { Observable } from "rxjs";

export class DetailMethodPaymentForCashClosuresUseCase implements UseCase<CashClosureModel, GenericResponse>{

    constructor(private cashClosureRepository: CashClosureRepository){}

    execute() : Observable<GenericResponse>{
        return this.cashClosureRepository.detailMethodPaymentForCashClosuresUseCase();
    }
}