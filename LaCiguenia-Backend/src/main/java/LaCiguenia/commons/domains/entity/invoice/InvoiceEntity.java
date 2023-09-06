package LaCiguenia.commons.domains.entity.invoice;
import LaCiguenia.commons.domains.entity.customer.CustomerEntity;
import LaCiguenia.commons.domains.entity.detail.DetailEntity;
import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.*;
import java.sql.Date;
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
    private Date invoiceDate;

    @Column(name = "invoice_iva")
    private Integer invoiceIva;

    @Column(name = "invoice_total")
    private Integer invoiceTotal;

    @OneToMany(mappedBy = "invoiceEntity")
    @JsonManagedReference
    @JsonIgnore
    private List<DetailEntity> listDetail;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "customerId")
    @JsonIgnore
    private CustomerEntity customerEntity;
}