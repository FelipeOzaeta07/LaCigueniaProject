import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { Observable } from "rxjs";
import { ExpenseRepository } from "@repository/expense/ExpenseRepository";

export class ReadLastExpenseUseCase implements UseCase<number, GenericResponse>{

    constructor(private expenseRepository: ExpenseRepository){}

    execute(expensiveId: number) : Observable<GenericResponse>{
        return this.expenseRepository.readLastExpenseForDay(expensiveId);
    }
}