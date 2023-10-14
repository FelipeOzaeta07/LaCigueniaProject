package LaCiguenia.commons.domains.dto.cashclosure;

import LaCiguenia.commons.domains.dto.opening.OpeningDTO;
import LaCiguenia.commons.domains.entity.opening.OpeningEntity;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import jakarta.persistence.Column;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDate;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class CashClosureDTO implements Serializable {
    private Integer cashClosureId;
    private LocalDate cashClosureDate;
    private String cashCloseStore;
    private Integer cashClosureNumber;
    private Double cashClosureTotalClosure;
    private Double cashClosureTotalOpeningBox;
    private Double cashClosureTotalMethodPay;
    private Double cashClosureTotalExpense;
    private Double cashClosureTotalCashBox;
    private Double cashClosureDifference;
    @JsonIdentityReference(alwaysAsId = true)
    private OpeningDTO openingEntity;
}