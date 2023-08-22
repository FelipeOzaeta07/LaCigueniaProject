package LaCiguenia.commons.domains.entity.invoice;
import LaCiguenia.commons.domains.entity.customer.CustomerEntity;
import LaCiguenia.commons.domains.entity.inventory.InventoryEntity;
import LaCiguenia.commons.domains.entity.material.MaterialEntity;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer InvoiceId;

    @Column(name = "date")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date InvoiceDate;

    @Column(name = "valor")
    private Integer InvoiceValor;

    @OneToMany(mappedBy = "detailEntity")
    @JsonManagedReference
  //  private List<detailEntity> listDetails;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id")
    @JsonBackReference
    private CustomerEntity customerEntity;

    public Integer getInvoiceValor() {
        return InvoiceValor;
    }

    public Date getInvoiceDate() {
        return InvoiceDate;
    }
}
