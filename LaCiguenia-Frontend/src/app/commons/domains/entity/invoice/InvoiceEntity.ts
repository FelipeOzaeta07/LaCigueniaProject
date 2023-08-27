import { CustomerEntity } from "@commons/domains/entity/customer/CustomerEntity";

export interface InvoiceEntity{
    invoiceId: number;
    invoiceDate: string;
    invoiceIva: number;
    invoiceTotal: number;
    customerEntity: CustomerEntity;
}