package LaCiguenia.component.cashclosure;

import LaCiguenia.commons.domains.entity.invoice.InvoiceEntity;
import java.util.List;

public interface ICashClosureComponent {
    Double totalSalesCashForDay(List<InvoiceEntity> listInvoiceEntityCash);
    Double totalSalesCreditForDay(List<InvoiceEntity> listInvoiceEntityCredit);
    Double totalSalesDebitForDay(List<InvoiceEntity> listInvoiceEntityDebit);
}