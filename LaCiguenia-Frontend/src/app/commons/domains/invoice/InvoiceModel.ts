import { CustomerModel } from "@commons/domains/customer/CustomerModel";
import { OpeningModel } from "../opening/OpeningModel";
import { MethodPaymentModel } from "../payment/MethodPaymentModel";

export interface InvoiceModel{
    invoiceId: number;
    invoiceDate: string;
    invoiceIva: number;
    invoiceTotal: number;
    invoiceStatus: string;
    customerEntity: CustomerModel;
    openingEntity: OpeningModel;
    paymentMethodEntity: MethodPaymentModel;
}