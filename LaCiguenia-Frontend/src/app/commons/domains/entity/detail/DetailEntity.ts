import { InvoiceEntity } from "@commons/domains/entity/invoice/InvoiceEntity";
import { ProductEntity } from "@commons/domains/entity/product/ProductEntity";

export interface DetailEntity{
    detailId: number;
    detailAmount: number;
    detailSubtotal: number;
    productId: ProductEntity;
    invoiceId: InvoiceEntity;
}