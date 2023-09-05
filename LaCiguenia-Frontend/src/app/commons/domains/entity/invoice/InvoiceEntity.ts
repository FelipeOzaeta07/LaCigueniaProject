import { CustomerEntity } from "@commons/domains/entity/customer/CustomerEntity";
import { DetailModel } from "@commons/domains/model/detail/DetailModel";

export interface InvoiceEntity{
    invoiceId: number;
    invoiceDate: string;
    invoiceIva: number;
    invoiceTotal: number;
    listDetail: DetailModel [];
    customerEntity: CustomerEntity;
}