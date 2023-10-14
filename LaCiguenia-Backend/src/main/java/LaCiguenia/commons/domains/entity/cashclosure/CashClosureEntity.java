package LaCiguenia.commons.domains.entity.cashclosure;

import LaCiguenia.commons.domains.entity.opening.OpeningEntity;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
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
@Table(name = "cash_closure_ciguenia")
public class CashClosureEntity {
    @Id
    @Column(name = "cash_closure_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer cashClosureId;

    @Column(name = "cash_closure_date")
    private LocalDate cashClosureDate;

    @Column(name = "cash_closure_store")
    private String cashCloseStore;

    @Column(name = "cash_closure_number")
    private Integer cashClosureNumber;

    @Column(name = "cash_closure_total_closure")
    private Double cashClosureTotalClosure;

    @Column(name = "cash_closure_total_opening_box")
    private Double cashClosureTotalOpeningBox;

    @Column(name = "cash_closure_total_method_pay")
    private Double cashClosureTotalMethodPay;

    @Column(name = "cash_closure_total_expense")
    private Double cashClosureTotalExpense;

    @Column(name = "cash_closure_total_cash_box")
    private Double cashClosureTotalCashBox;

    @Column(name = "cash_closure_difference")
    private Double cashClosureDifference;

    @OneToOne
    @JoinColumn(name = "opening_id")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "openingId")
    private OpeningEntity openingEntity;
}