import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MethodPaymentModel } from "@commons/domains/payment/MethodPaymentModel";
import { BASE_URL_PAYMENT_METHOD, CREATE_PAYMENT_METHOD, READ_PAYMENT_METHODS } from "@commons/endpoint/payment/MethodPaymentEndPoint";
import { GenericResponse } from "@commons/response/GenericResponse";
import { MethodPaymentRepository } from "@repository/payment/MethodPaymentRepository";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class MethodPaymentService extends MethodPaymentRepository{
    
    constructor(private http: HttpClient){
        super();
    }

    override createMethodPayment(methodPaymentModel: MethodPaymentModel): Observable<GenericResponse> {
        return this.http
        .post<GenericResponse>( BASE_URL_PAYMENT_METHOD + CREATE_PAYMENT_METHOD, methodPaymentModel)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }

    override readMethodsPayment(): Observable<GenericResponse> {
        return this.http
        .get<GenericResponse>( BASE_URL_PAYMENT_METHOD + READ_PAYMENT_METHODS)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }
}