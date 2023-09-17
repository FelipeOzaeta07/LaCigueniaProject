import { InvoiceModel } from "@commons/domains/invoice/InvoiceModel";
import { Observable } from "rxjs";
import { GenericResponse } from "@commons/response/GenericResponse";
import { InformationGeneralInvoice } from "@commons/domains/invoice/InformationGeneralInvoice";


export abstract class InvoiceRepository {
    abstract createInvoice(invoiceModel :InvoiceModel): Observable<GenericResponse>;
    abstract readInvoice(params: {invoiceTotal: number}): Observable<GenericResponse>;
    abstract readInvoicies (): Observable<GenericResponse>;
    abstract updateInvoice (invoiceModel :InvoiceModel): Observable<GenericResponse>;
    abstract deleteInvoice (params: {invoiceTotal: number}): Observable<GenericResponse>;
    abstract readInformationGeneralInvoices (): Observable<GenericResponse>;
}