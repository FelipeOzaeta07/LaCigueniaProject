package LaCiguenia.commons.domains.entity.invoice;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.*;
import java.sql.Date;


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

    public Integer getInvoiceValor() {
        return InvoiceValor;
    }

    public Date getInvoiceDate() {
        return InvoiceDate;
    }
}
