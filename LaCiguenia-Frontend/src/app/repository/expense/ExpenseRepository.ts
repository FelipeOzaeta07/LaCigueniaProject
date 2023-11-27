import { ExpenseModel } from "@commons/domains/expense/ExpenseModel";
import { GenericResponse } from "@commons/response/GenericResponse";
import { Observable } from "rxjs";

export abstract class ExpenseRepository {
    abstract createExpense(expensiveModel : ExpenseModel): Observable<GenericResponse>;
    abstract readLastExpenseForDay(expensiveId: number): Observable<GenericResponse>;
    abstract readExpensesForOpening(storeId: number): Observable<GenericResponse>;
    abstract readExpensesForCash(): Observable<GenericResponse>;
    abstract readExpensesForMonth(storeId : number): Observable<GenericResponse>;
    abstract updateExpense (expensiveModel : ExpenseModel): Observable<GenericResponse>;
    abstract deleteExpense (expensiveId: number): Observable<GenericResponse>;
}