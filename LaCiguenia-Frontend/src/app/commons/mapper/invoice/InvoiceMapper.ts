import { InvoiceEntity } from "@commons/domains/entity/invoice/InvoiceEntity";
import { InvoiceModel } from "@commons/domains/model/invoice/InvoiceModel";
import { Mapper } from "@commons/helpers/Mapper";

export class InvoiceMapper extends Mapper<InvoiceEntity, InvoiceModel>{
    override converterEntityToModel(params: InvoiceEntity): InvoiceModel {
        return{
            invoiceId: params.invoiceId,
            invoiceDate: params.invoiceDate,
            invoiceIva: params.invoiceIva,
            invoiceTotal: params.invoiceTotal,
            customerEntity: params.customerEntity
        };
    }
    override converterModelToEntity(params: InvoiceModel): InvoiceEntity {
        return{
            invoiceId: params.invoiceId,
            invoiceDate: params.invoiceDate,
            invoiceIva: params.invoiceIva,
            invoiceTotal: params.invoiceTotal,
            customerEntity: params.customerEntity
        };
    }
}