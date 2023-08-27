import { InvoiceModel } from "@commons/domains/model/invoice/InvoiceModel";
import { Observable } from "rxjs";
import { GenericResponse } from "@commons/response/GenericResponse";


export abstract class InvoiceRepository {
    abstract createInvoice(invoiceModel :InvoiceModel): Observable<GenericResponse>;
    abstract readInvoice(params: {invoiceId: number}): Observable<GenericResponse>;
    abstract readInvoicies (): Observable<GenericResponse>;
    abstract updateInvoice (invoiceModel :InvoiceModel): Observable<GenericResponse>;
    abstract deleteInvoice (params: {invoiceId: number}): Observable<GenericResponse>;
}