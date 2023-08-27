import { InvoiceModel } from "@commons/domains/model/invoice/InvoiceModel";
import { ProductModel } from "@commons/domains/model/product/ProductModel";

export interface DetailModel{
    detailId: number;
    detailAmount: number;
    detailSubtotal: number;
    productId: ProductModel;
    invoiceId: InvoiceModel;
}