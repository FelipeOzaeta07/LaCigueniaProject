package LaCiguenia.component.invoice.implement;


import LaCiguenia.commons.domains.entity.invoice.InvoiceEntity;
import LaCiguenia.component.invoice.IInvoiceComponent;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Component
public class InvoiceComponent implements IInvoiceComponent {

    @Override
    public Integer dailySales(List<InvoiceEntity> listInvoice) {
        Integer invoicesDaily = 0;
        try {
            LocalDate today = LocalDate.now();
            for (InvoiceEntity invoiceEntity : listInvoice) {
                LocalDate invoiceDate = invoiceEntity.getInvoiceDate().toLocalDate();
                if (invoiceDate.equals(today)) {
                    invoicesDaily += invoiceEntity.getInvoiceValor();
                }
            }
            return invoicesDaily;
        } catch (Exception e) {
            return invoicesDaily;
        }
    }

    @Override
    public Integer totalSales(List<InvoiceEntity> listInvoice) {
        Integer invoicesTotal = 0;
        try{
            Calendar calendar = Calendar.getInstance();
            int monthCurrent = calendar.get(Calendar.MONTH) + 1;
            for (InvoiceEntity invoiceEntity : listInvoice) {
                Date invoiceDate = invoiceEntity.getInvoiceDate();
                calendar.setTime(invoiceDate);
                int monthRegister = calendar.get(Calendar.MONTH) + 1;
                if (monthRegister == monthCurrent) {
                    invoicesTotal += invoiceEntity.getInvoiceValor();
                }
            }
            return invoicesTotal;
        }
        catch (Exception e){
            return invoicesTotal;
        }
    }


}

