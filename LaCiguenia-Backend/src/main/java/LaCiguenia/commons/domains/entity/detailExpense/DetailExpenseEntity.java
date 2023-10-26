package LaCiguenia.commons.domains.entity.detailExpense;

import LaCiguenia.commons.domains.entity.expense.ExpenseEntity;
import LaCiguenia.commons.domains.entity.payment.PaymentMethodEntity;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.*;

@Builder(builderMethodName = "newInstance")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "detail_expense_ciguenia")
public class DetailExpenseEntity {
    @Id
    @Column(name = "detail_expense_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer detailExpenseId;

    @ManyToOne()
    @JoinColumn(name = "expense_id")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "expenseId")
    @JsonIgnore
    private ExpenseEntity expenseEntity;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "payment_method_id")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "paymentMethodId")
    @JsonIgnore
    private PaymentMethodEntity paymentMethodEntity;
}
