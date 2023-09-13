import { CustomerModel } from "@commons/domains/customer/CustomerModel";

export interface InvoiceModel{
    invoiceId: number;
    invoiceDate: string;
    invoiceIva: number;
    invoiceTotal: number;
    customerEntity: CustomerModel;
}