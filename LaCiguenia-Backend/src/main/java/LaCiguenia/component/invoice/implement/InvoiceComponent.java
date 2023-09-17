package LaCiguenia.component.invoice.implement;


import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.domains.entity.invoice.InvoiceEntity;
import LaCiguenia.component.invoice.IInvoiceComponent;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;
import java.time.Month;
import java.time.LocalDate;
import java.util.List;

@Component
@Log4j2
public class InvoiceComponent implements IInvoiceComponent {

    @Override
    public Double invoiceSalesTotalDay(List<InvoiceEntity> listInvoice) {
        Double invoicesDaily = 0.0;
        try {
            LocalDate today = LocalDate.now();
            for (InvoiceEntity invoiceEntity : listInvoice) {
                LocalDate invoiceDate = invoiceEntity.getInvoiceDate();
                if (invoiceDate.equals(today)) {
                    invoicesDaily += invoiceEntity.getInvoiceTotal();
                }
            }
            return invoicesDaily;
        } catch (Exception e) {
            log.error(GeneralResponse.INTERNAL_SERVER, e);
            return invoicesDaily;
        }
    }

    @Override
    public Double invoiceSalesTotalMonth(List<InvoiceEntity> listInvoice) {
        Double invoicesTotal = 0.0;
        try {
            LocalDate now = LocalDate.now();
            Month currentMonth = now.getMonth();
            for (InvoiceEntity invoiceEntity : listInvoice) {
                LocalDate invoiceDate = invoiceEntity.getInvoiceDate();
                if (invoiceDate.getMonth() == currentMonth) {
                    invoicesTotal += invoiceEntity.getInvoiceTotal();
                }
            }
            return invoicesTotal;
        } catch (Exception e) {
            log.error(GeneralResponse.INTERNAL_SERVER, e);
            return invoicesTotal;
        }
    }
}