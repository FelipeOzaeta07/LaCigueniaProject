import { CustomerModel } from "@commons/domains/model/customer/CustomerModel";
import { DetailModel } from "../detail/DetailModel";

export interface InvoiceModel{
    invoiceId: number;
    invoiceDate: string;
    invoiceIva: number;
    invoiceTotal: number;
    listDetail: DetailModel [];
    customerEntity: CustomerModel;
}