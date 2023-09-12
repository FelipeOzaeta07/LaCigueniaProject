import { InvoiceModel } from "@commons/domains/model/invoice/InvoiceModel";
import { ProductModel } from "@commons/domains/model/product/ProductModel";

export interface DetailEntity{
    detailId: number;
    detailAmount: number;
    detailSubTotal: number;
    productEntity: ProductModel;
    invoiceEntity: InvoiceModel;
}