package LaCiguenia.component.invoice;

import LaCiguenia.commons.domains.entity.invoice.InvoiceEntity;
import java.util.List;

public interface IInvoiceComponent {
    Double invoiceSalesTotalDay (List<InvoiceEntity> listInvoice);
    Double invoiceSalesTotalMonth (List<InvoiceEntity> listInvoice);
    Integer invoiceCountTotalMonth(List<InvoiceEntity> listInvoice);
    Integer invoiceCountTotalToday(List<InvoiceEntity> listInvoice);
}