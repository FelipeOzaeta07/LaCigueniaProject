import { ProductModel } from "@commons/domains/model/product/ProductModel";
import { InvoiceModel } from "../invoice/InvoiceModel";

export interface DetailModel{
    detailId: number;
    detailAmount: number;
    detailSubTotal: number;
    productEntity: ProductModel;
    invoiceEntity: InvoiceModel;
}