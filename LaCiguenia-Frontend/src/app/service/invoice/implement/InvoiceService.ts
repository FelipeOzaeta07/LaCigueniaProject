import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { InvoiceModel } from "@commons/domains/model/invoice/InvoiceModel";
import { BASE_URL_INVOICE, CREATE_INVOICE, DELETE_INVOICE, READ_INVOICE, READ_INVOICIES, UPDATE_INVOICE } from "@commons/endpoint/invoice/InvoiceEndPoint";
import { InvoiceMapper } from "@commons/mapper/invoice/InvoiceMapper";
import { GenericResponse } from "@commons/response/GenericResponse";
import { InvoiceRepository } from "@repository/invoice/InvoiceRepository";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class InvoiceService extends InvoiceRepository {

    invoiceMapper = new InvoiceMapper();

    constructor(private http: HttpClient){
        super();
    }

    override createInvoice(invoiceModel: InvoiceModel): Observable<GenericResponse> {
        const invoiceEntity = this.invoiceMapper.converterModelToEntity(invoiceModel);

        return this.http
            .post<GenericResponse>(BASE_URL_INVOICE + CREATE_INVOICE, invoiceEntity)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

    override readInvoice(params: { invoiceId: number; }): Observable<GenericResponse> {
        return this.http
            .get<GenericResponse>(BASE_URL_INVOICE + READ_INVOICE, {params})
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
        const invoiceEntity = this.invoiceMapper.converterModelToEntity(invoiceModel);
    
        return this.http
            .put<GenericResponse>(BASE_URL_INVOICE + UPDATE_INVOICE, invoiceEntity)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }
    override deleteInvoice(params: { invoiceId: number; }): Observable<GenericResponse> {
        return this.http
            .post<GenericResponse>(BASE_URL_INVOICE + DELETE_INVOICE, params)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }
}