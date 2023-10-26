package LaCiguenia.commons.domains.entity.payment;

import LaCiguenia.commons.domains.entity.detail.DetailEntity;
import LaCiguenia.commons.domains.entity.detailExpense.DetailExpenseEntity;
import LaCiguenia.commons.domains.entity.expense.ExpenseEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Builder(builderMethodName = "newInstance")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "payment_method_ciguenia")
public class PaymentMethodEntity {
    @Id
    @Column(name = "payment_method_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer paymentMethodId;

    @Column(name = "payment_method_name")
    private String paymentMethodName;

    @Column(name = "payment_method_status")
    private String paymentMethodStatus;

    @OneToMany(mappedBy = "paymentMethodEntity")
    @JsonManagedReference
    @JsonIgnore
    private List<DetailExpenseEntity> listDetail;
}