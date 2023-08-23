package LaCiguenia.component.invoice;

import LaCiguenia.commons.domains.entity.invoice.InvoiceEntity;


import java.util.List;

public interface IInvoiceComponent {
    public Integer dailySales (List<InvoiceEntity> listInvoice);

    public Integer totalSales(List<InvoiceEntity> listInvoice);
}
