import { ExpenseModel } from "@commons/domains/expense/ExpenseModel";
import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { Observable } from "rxjs";
import { ExpenseRepository } from "@repository/expense/ExpenseRepository";

export class CreateExpenseUseCase implements UseCase<ExpenseModel, GenericResponse>{

    constructor(private expenseRepository: ExpenseRepository){}

    execute(expenseModel: ExpenseModel) : Observable<GenericResponse>{
        return this.expenseRepository.createExpense(expenseModel);
    }
}