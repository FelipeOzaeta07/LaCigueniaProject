package LaCiguenia.component.cashclosure;

import LaCiguenia.commons.domains.entity.invoice.InvoiceEntity;
import LaCiguenia.commons.domains.wrapper.ISalesMethodPaymentWrapper;

import java.util.List;

public interface ICashClosureComponent {
    public Double totalSalesCashForDay(List<ISalesMethodPaymentWrapper> listSalesForMethodPayment);
}