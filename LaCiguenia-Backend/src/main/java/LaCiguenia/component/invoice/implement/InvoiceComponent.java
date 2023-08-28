package LaCiguenia.component.invoice.implement;


import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.domains.entity.invoice.InvoiceEntity;
import LaCiguenia.component.invoice.IInvoiceComponent;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;
import java.sql.Date;
import java.util.Calendar;
import java.time.LocalDate;
import java.util.List;

@Component
@Log4j2
public class InvoiceComponent implements IInvoiceComponent {

    @Override
    public Integer invoiceSalesTotalDay(List<InvoiceEntity> listInvoice) {
        Integer invoicesDaily = 0;
        try {
            for (InvoiceEntity invoiceEntity : listInvoice) {
                LocalDate invoiceDate = invoiceEntity.getInvoiceDate().toLocalDate();
                if (invoiceDate.equals(LocalDate.now())) {
                    invoicesDaily += invoiceEntity.getInvoiceTotal();
                }
            } return invoicesDaily;
        }catch (Exception e) {
            log.error(GeneralResponse.INTERNAL_SERVER, e);
            return invoicesDaily;
        }
    }

    @Override
    public Integer invoiceSalesTotalMonth(List<InvoiceEntity> listInvoice) {
        Integer invoicesTotal = 0;
        try{
            Calendar calendar = Calendar.getInstance();
            Integer monthCurrent = calendar.get(Calendar.MONTH) + 1;
            for (InvoiceEntity invoiceEntity : listInvoice) {
                Date invoiceDate = invoiceEntity.getInvoiceDate();
                calendar.setTime(invoiceDate);
                if (monthCurrent.equals(calendar.get(Calendar.MONTH) + 1)) {
                    invoicesTotal += invoiceEntity.getInvoiceTotal();
                }
            } return invoicesTotal;
        }catch (Exception e){
            log.error(GeneralResponse.INTERNAL_SERVER, e);
            return invoicesTotal;
        }
    }

    @Override
    public Integer invoiceCountTotalMonth(List<InvoiceEntity> listInvoice) {
        Integer invoicesTotal = 0;
        try {
            Calendar calendar = Calendar.getInstance();
            Integer monthCurrent = calendar.get(Calendar.MONTH) + 1;
            for (InvoiceEntity invoiceEntity : listInvoice) {
                Date invoiceDate = invoiceEntity.getInvoiceDate();
                calendar.setTime(invoiceDate);
                if (monthCurrent.equals(calendar.get(Calendar.MONTH) + 1)) {
                    invoicesTotal += 1;
                }
            }
            return invoicesTotal;
        } catch (Exception e) {
            log.error(GeneralResponse.INTERNAL_SERVER, e);
            return invoicesTotal;
        }
    }
}
