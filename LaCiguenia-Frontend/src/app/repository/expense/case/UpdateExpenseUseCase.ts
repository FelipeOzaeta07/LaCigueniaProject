import { ExpenseModel } from "@commons/domains/expense/ExpenseModel";
import { UseCase } from "@commons/helpers/UserCase";
import { ExpenseRepository } from "@repository/expense/ExpenseRepository";
import { GenericResponse } from "@commons/response/GenericResponse";
import { Observable } from "rxjs";

export class UpdateExpenseUseCase implements UseCase<ExpenseModel, GenericResponse>{

    constructor(private expenseRepository: ExpenseRepository){}

    execute(expenseModel: ExpenseModel) : Observable<GenericResponse>{
        return this.expenseRepository.updateExpense(expenseModel);
    }
}