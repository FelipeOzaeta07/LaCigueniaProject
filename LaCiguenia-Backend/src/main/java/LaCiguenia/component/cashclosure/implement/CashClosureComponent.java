package LaCiguenia.component.cashclosure.implement;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.domains.entity.invoice.InvoiceEntity;
import LaCiguenia.commons.domains.wrapper.ISalesMethodPaymentWrapper;
import LaCiguenia.component.cashclosure.ICashClosureComponent;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
@Log4j2
public class CashClosureComponent implements ICashClosureComponent {

    private Double totalIva = 0.0;

    @Override
    public Double totalSalesCashForDay(List<ISalesMethodPaymentWrapper> listSalesForMethodPayment) {
        Double totalSalesCash = 0.0;
        try {
            for(ISalesMethodPaymentWrapper item: listSalesForMethodPayment){
                this.totalIva += item.getTotalIva();
                if(item.getPaymentMethodName() == "Efectivo"){
                    totalSalesCash += item.getTotalSales();
                }
            }
            return totalSalesCash;
        } catch (Exception e) {
            log.error(GeneralResponse.INTERNAL_SERVER, e);
            return totalSalesCash;
        }
    }

    public Double getTotalIva() {
        return totalIva;
    }
}