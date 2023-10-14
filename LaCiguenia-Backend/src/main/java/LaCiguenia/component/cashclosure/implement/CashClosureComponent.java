package LaCiguenia.component.cashclosure.implement;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.domains.entity.invoice.InvoiceEntity;
import LaCiguenia.component.cashclosure.ICashClosureComponent;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
@Log4j2
public class CashClosureComponent implements ICashClosureComponent {

    private Double totalIva = 0.0;

    @Override
    public Double totalSalesCashForDay(List<InvoiceEntity> listInvoiceEntityCash) {
        Double totalSalesCash = 0.0;
        try {
            totalIva += listInvoiceEntityCash.stream()
                    .mapToDouble(InvoiceEntity::getInvoiceIva)
                    .sum();
            totalSalesCash = listInvoiceEntityCash.stream()
                    .mapToDouble(InvoiceEntity::getInvoiceTotal)
                    .sum();
            return totalSalesCash;
        } catch (Exception e) {
            log.error(GeneralResponse.INTERNAL_SERVER, e);
            return totalSalesCash;
        }
    }


    @Override
    public Double totalSalesCreditForDay(List<InvoiceEntity> listInvoiceEntityCredit) {
        Double totalSalesCredit = 0.0;
        try{
            totalIva += listInvoiceEntityCredit.stream()
                    .mapToDouble(InvoiceEntity::getInvoiceIva)
                    .sum();
            totalSalesCredit = listInvoiceEntityCredit.stream()
                    .mapToDouble(InvoiceEntity::getInvoiceTotal)
                    .sum();
            return totalSalesCredit;
        }catch (Exception e){
            log.error(GeneralResponse.INTERNAL_SERVER, e);
            return totalSalesCredit;
        }
    }

    @Override
    public Double totalSalesDebitForDay(List<InvoiceEntity> listInvoiceEntityDebit) {
        Double totalSalesDebit = 0.0;
        try{
            totalIva += listInvoiceEntityDebit.stream()
                    .mapToDouble(InvoiceEntity::getInvoiceIva)
                    .sum();
            totalSalesDebit = listInvoiceEntityDebit.stream()
                    .mapToDouble(InvoiceEntity::getInvoiceTotal)
                    .sum();
            return totalSalesDebit;
        }catch (Exception e){
            log.error(GeneralResponse.INTERNAL_SERVER, e);
            return totalSalesDebit;
        }
    }

    public Double getTotalIva() {
        return totalIva;
    }
}