import { CashClosureModel } from "@commons/domains/cashclosure/CashClosureModel";
import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { CashClosureRepository } from "../CashClosureRepository";
import { Observable } from "rxjs";

export class CreateCashClosureUseCase implements UseCase<CashClosureModel, GenericResponse>{

    constructor(private cashClosureRepository: CashClosureRepository){}

    execute(cashClosureModel: CashClosureModel) : Observable<GenericResponse>{
        return this.cashClosureRepository.createCashClosure(cashClosureModel);
    }
}