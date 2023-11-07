package LaCiguenia.commons.domains.dto.expense;

import LaCiguenia.commons.domains.entity.opening.OpeningEntity;
import LaCiguenia.commons.domains.entity.payment.PaymentMethodEntity;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
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
public class ExpenseDTO implements Serializable {
    private Integer expenseId;
    private LocalDate expenseDate;
    private String expenseNumberInvoice;
    private String expenseSupplierLocation;
    private Double expenseValue;
    private String expenseDescription;
    private String expenseStatus;
    @JsonIdentityReference(alwaysAsId = true)
    private PaymentMethodEntity paymentMethodEntity;
    @JsonIdentityReference(alwaysAsId = true)
    private OpeningEntity openingEntity;
}