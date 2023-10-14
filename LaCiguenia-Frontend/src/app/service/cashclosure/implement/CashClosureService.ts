import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CashClosureModel } from "@commons/domains/cashclosure/CashClosureModel";
import { BASE_URL_CASH_CLOSURE, CREATE_CASH_CLOSURE, READ_CASH_CLOSURE, READ_CASH_CLOSURES, READ_INFORMATION_CASH_CLOSURE, READ_LAST_CASH_CLOSURES } from "@commons/endpoint/cashclosure/CashClosure";
import { GenericResponse } from "@commons/response/GenericResponse";
import { CashClosureRepository } from "@repository/cashclosure/CashClosureRepository";
import { Observable, catchError, throwError } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class CashClosureService extends CashClosureRepository {

    constructor(private http: HttpClient){
        super();
    }


    override createCashClosure(cashClosureModel: CashClosureModel): Observable<GenericResponse> {
        return this.http
            .post<GenericResponse>(BASE_URL_CASH_CLOSURE + CREATE_CASH_CLOSURE, cashClosureModel)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

    override readCashClosure(cashClosureId: number): Observable<GenericResponse> {
        return this.http
            .get<GenericResponse>(BASE_URL_CASH_CLOSURE + READ_CASH_CLOSURE + cashClosureId)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

    override readCashClosures(): Observable<GenericResponse> {
        return this.http
        .get<GenericResponse>(BASE_URL_CASH_CLOSURE + READ_CASH_CLOSURES)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }

    override readLastCashClosure(): Observable<GenericResponse> {
        return this.http
        .get<GenericResponse>(BASE_URL_CASH_CLOSURE + READ_LAST_CASH_CLOSURES)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }

    override informationForCashClosures(): Observable<GenericResponse> {
        return this.http
        .get<GenericResponse>(BASE_URL_CASH_CLOSURE + READ_INFORMATION_CASH_CLOSURE)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }
}