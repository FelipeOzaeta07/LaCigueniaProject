package LaCiguenia.commons.domains.entity.expense;

import LaCiguenia.commons.domains.entity.opening.OpeningEntity;
import LaCiguenia.commons.domains.entity.payment.PaymentMethodEntity;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Builder(builderMethodName = "newInstance")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "expense_ciguenia")
public class ExpenseEntity {
    @Id
    @Column(name = "expense_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer expenseId;

    @Column(name = "expense_date")
    private LocalDate expenseDate;

    @Column(name = "expense_number_invoice")
    private String expenseNumberInvoice;

    @Column(name = "expense_supplier_location")
    private String expenseSupplierLocation;

    @Column(name = "expense_value")
    private Double expenseValue;

    @Column(name = "expense_description")
    private String expenseDescription;

    @Column(name = "expense_status")
    private String expenseStatus;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "payment_method_id")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "paymentMethodId")
    @JsonIgnore
    private PaymentMethodEntity paymentMethodEntity;

    @ManyToOne()
    @JoinColumn(name = "opening_id")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "openingId")
    @JsonIgnore
    private OpeningEntity openingEntity;
}