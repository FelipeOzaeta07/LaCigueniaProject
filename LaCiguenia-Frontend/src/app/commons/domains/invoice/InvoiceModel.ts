import { CustomerModel } from "@commons/domains/customer/CustomerModel";
import { OpeningModel } from "../opening/OpeningModel";

export interface InvoiceModel{
    invoiceId: number;
    invoiceDate: string;
    invoiceIva: number;
    invoicePay: string;
    invoiceTotal: number;
    invoiceStatus: string;
    customerEntity: CustomerModel;
    openingEntity: OpeningModel;
}