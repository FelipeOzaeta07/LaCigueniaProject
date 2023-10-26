package LaCiguenia.commons.domains.dto.expense;

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
public class ExpenseDTO implements Serializable {
    private Integer expenseId;
    private Integer expenseNumberInvoice;
    private String expenseSupplierLocation;
    private Integer expenseValor;
    private String expenseDescription;
    private String expenseStatus;
    @JsonIdentityReference(alwaysAsId = true)
    private PaymentMethodEntity paymentMethodEntity;
}
