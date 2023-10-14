package LaCiguenia.commons.domains.dto.cashclosure;

import lombok.*;

import java.io.Serializable;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class CashClosureInformationDTO implements Serializable {
    private String cashClosureInformationStore;
    private Double cashClosureInformationOpeningBox;
    private Double cashClosureInformationTotalCash;
    private Double cashClosureInformationTotalCredit;
    private Double cashClosureInformationTotalDebit;
    private Double cashClosureInformationTotalIva;
    private Double cashClosureInformationTotalCashBox;
    private Double cashClosureInformationTotalSalesMethodPay;
    private Double cashClosureInformationTotalClosure;
}