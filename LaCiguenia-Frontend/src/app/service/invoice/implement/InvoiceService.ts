import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { InvoiceModel } from "@commons/domains/invoice/InvoiceModel";
import {    BASE_URL_INVOICE, CREATE_INVOICE, DELETE_INVOICE, READ_INVOICE, 
            READ_INVOICIES, UPDATE_INVOICE, READ_INVOICES_MONTH_DAY, READ_TOTAL_INVOICES_PREVIOUS_DAY } 
        from "@commons/endpoint/invoice/InvoiceEndPoint";
import { GenericResponse } from "@commons/response/GenericResponse";
import { InvoiceRepository } from "@repository/invoice/InvoiceRepository";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class InvoiceService extends InvoiceRepository {

    constructor(private http: HttpClient){
        super();
    }

    override createInvoice(invoiceModel: InvoiceModel): Observable<GenericResponse> {
        return this.http
            .post<GenericResponse>(BASE_URL_INVOICE + CREATE_INVOICE, invoiceModel)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

    override readInvoice(invoiceTotal: number): Observable<GenericResponse> {
        return this.http
            .get<GenericResponse>(BASE_URL_INVOICE + READ_INVOICE + invoiceTotal)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

    override readInvoicies(): Observable<GenericResponse> {
        return this.http
        .get<GenericResponse>(BASE_URL_INVOICE + READ_INVOICIES)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }

    override updateInvoice(invoiceModel: InvoiceModel): Observable<GenericResponse> {
    
        return this.http
            .put<GenericResponse>(BASE_URL_INVOICE + UPDATE_INVOICE, invoiceModel)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

    override deleteInvoice(invoiceTotal: number): Observable<GenericResponse> {
        return this.http
            .delete<GenericResponse>(BASE_URL_INVOICE + DELETE_INVOICE + invoiceTotal)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

    override readInformationGeneralInvoices(): Observable<GenericResponse> {
        return this.http
        .get<GenericResponse>(BASE_URL_INVOICE + READ_INVOICES_MONTH_DAY)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }

    override totalPreviousDayInvoice(): Observable<GenericResponse> {
        return this.http
        .get<GenericResponse>(BASE_URL_INVOICE + READ_TOTAL_INVOICES_PREVIOUS_DAY)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }
}