import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ExpenseModel } from "@commons/domains/expense/ExpenseModel";
import { BASE_URL_EXPENSE, CREATE_EXPENSE, DELETE_EXPENSE, READ_LAST_EXPENSE, READ_TOTAL_EXPENSE, READ_TOTAL_EXPENSE_CASH, READ_TOTAL_EXPENSE_MONTH, UPDATE_EXPENSE } from "@commons/endpoint/expense/ExpenseEndPoint";
import { GenericResponse } from "@commons/response/GenericResponse";
import { ExpenseRepository } from "@repository/expense/ExpenseRepository";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ExpenseService extends ExpenseRepository {

    constructor(private http: HttpClient){
        super();
    }

    override createExpense(expenseModel: ExpenseModel): Observable<GenericResponse> {
        return this.http
        .post<GenericResponse>(BASE_URL_EXPENSE + CREATE_EXPENSE, expenseModel)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }
    override readLastExpenseForDay(expenseId: number): Observable<GenericResponse> {
        return this.http
        .get<GenericResponse>(BASE_URL_EXPENSE + READ_LAST_EXPENSE)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }
    override readExpensesForOpening(storeId: number): Observable<GenericResponse> {
        return this.http
        .get<GenericResponse>(BASE_URL_EXPENSE + READ_TOTAL_EXPENSE + storeId)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }
    override readExpensesForCash(): Observable<GenericResponse> {
        return this.http
        .get<GenericResponse>(BASE_URL_EXPENSE + READ_TOTAL_EXPENSE_CASH)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }
    override readExpensesForMonth(storeId: number): Observable<GenericResponse> {
        return this.http
        .get<GenericResponse>(BASE_URL_EXPENSE + READ_TOTAL_EXPENSE_MONTH + storeId)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }

    override updateExpense(expenseModel: ExpenseModel): Observable<GenericResponse> {
        return this.http
        .put<GenericResponse>(BASE_URL_EXPENSE + UPDATE_EXPENSE, expenseModel)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }
    override deleteExpense(expenseId: number): Observable<GenericResponse> {
        return this.http
        .delete<GenericResponse>(BASE_URL_EXPENSE + DELETE_EXPENSE + expenseId)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }
}