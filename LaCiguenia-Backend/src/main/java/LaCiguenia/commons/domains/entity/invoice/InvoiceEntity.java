package LaCiguenia.commons.domains.entity.invoice;

import LaCiguenia.commons.domains.dto.payment.PaymentMethodDTO;
import LaCiguenia.commons.domains.entity.customer.CustomerEntity;
import LaCiguenia.commons.domains.entity.detail.DetailEntity;
import LaCiguenia.commons.domains.entity.opening.OpeningEntity;
import LaCiguenia.commons.domains.entity.payment.PaymentMethodEntity;
import com.fasterxml.jackson.annotation.*;
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
@Table(name = "invoice_ciguenia")
public class InvoiceEntity {
    @Id
    @Column(name = "invoice_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer invoiceId;

    @Column(name = "invoice_date")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate invoiceDate;

    @Column(name = "invoice_iva")
    private Integer invoiceIva;

    @Column(name = "invoice_total")
    private Integer invoiceTotal;

    @Column(name = "invoice_status")
    private String invoiceStatus;

    @OneToMany(mappedBy = "invoiceEntity")
    @JsonManagedReference
    @JsonIgnore
    private List<DetailEntity> listDetail;

    @ManyToOne()
    @JoinColumn(name = "customer_id")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "customerId")
    private CustomerEntity customerEntity;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "opening_id")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "openingId")
    @JsonIgnore
    private OpeningEntity openingEntity;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "payment_method_id")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "paymentMethodId")
    @JsonIgnore
    private PaymentMethodEntity paymentMethodEntity;
}