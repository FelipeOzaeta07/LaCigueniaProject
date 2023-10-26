package LaCiguenia.commons.domains.dto.detailExpense;

import LaCiguenia.commons.domains.entity.expense.ExpenseEntity;
import LaCiguenia.commons.domains.entity.payment.PaymentMethodEntity;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import lombok.*;
import java.io.Serializable;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class DetailExpenseDTO implements Serializable {
    private Integer detailExpenseId;
    @JsonIdentityReference(alwaysAsId = true)
    private ExpenseEntity expenseEntity;
    @JsonIdentityReference(alwaysAsId = true)
    private PaymentMethodEntity paymentMethodEntity;
}