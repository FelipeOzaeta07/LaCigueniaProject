package LaCiguenia.component.invoice;

import LaCiguenia.commons.domains.entity.invoice.InvoiceEntity;
import java.util.List;

public interface IInvoiceComponent {
    Integer invoiceSalesTotalDay (List<InvoiceEntity> listInvoice);
    Integer invoiceSalesTotalMonth (List<InvoiceEntity> listInvoice);
}