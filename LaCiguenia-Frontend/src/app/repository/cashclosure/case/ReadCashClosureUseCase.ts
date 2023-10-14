import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { CashClosureRepository } from "@repository/cashclosure/CashClosureRepository";
import { Observable } from "rxjs";

export class ReadCashClosureUseCase implements UseCase<number, GenericResponse>{

    constructor(private cashClosureRepository: CashClosureRepository){}

    execute(cashClosureId: number) : Observable<GenericResponse>{
        return this.cashClosureRepository.readCashClosure(cashClosureId);
    }
}