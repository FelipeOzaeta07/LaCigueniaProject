import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { ExpenseRepository } from "@repository/expense/ExpenseRepository";
import { Observable } from "rxjs";

export class ReadExpensesForOpeningUseCase implements UseCase<number, GenericResponse>{

    constructor(private expenseRepository: ExpenseRepository){}

    execute(storeId: number) : Observable<GenericResponse>{
        return this.expenseRepository.readExpensesForOpening(storeId);
    }
}