import { CustomerModel } from "@commons/domains/model/customer/CustomerModel";

export interface InvoiceModel{
    invoiceId: number;
    invoiceDate: string;
    invoiceIva: number;
    invoiceTotal: number;
    customerEntity: CustomerModel;
}