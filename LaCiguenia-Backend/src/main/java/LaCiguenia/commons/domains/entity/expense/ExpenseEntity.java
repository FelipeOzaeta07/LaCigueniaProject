package LaCiguenia.commons.domains.entity.expense;

import LaCiguenia.commons.domains.entity.detailExpense.DetailExpenseEntity;
import LaCiguenia.commons.domains.entity.opening.OpeningEntity;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

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
    private Integer expenseNumberInvoice;

    @Column(name = "expense_supplier_location")
    private String expenseSupplierLocation;

    @Column(name = "expense_value")
    private Integer expenseValue;

    @Column(name = "expense_amount")
    private Integer expenseAmount;

    @Column(name = "expense_description")
    private String expenseDescription;

    @Column(name = "expense_status")
    private String expenseStatus;

    @ManyToOne()
    @JoinColumn(name = "opening_id")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "openingId")
    @JsonIgnore
    private OpeningEntity openingEntity;







    @OneToMany(mappedBy = "expenseEntity")
    @JsonManagedReference
    @JsonIgnore
    private List<DetailExpenseEntity> listDetail;
}