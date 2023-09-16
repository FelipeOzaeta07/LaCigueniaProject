package LaCiguenia.commons.domains.entity.detail;

import LaCiguenia.commons.domains.entity.invoice.InvoiceEntity;
import LaCiguenia.commons.domains.entity.product.ProductEntity;
import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.*;

@Builder(builderMethodName = "newInstance")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "detail_invoice_ciguenia")
public class DetailEntity {
    @Id
    @Column(name = "detail_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer detailId;

    @Column(name = "detail_amount")
    private Integer detailAmount;

    @Column(name = "detail_subtotal")
    private Integer detailSubTotal;

    @ManyToOne()
    @JoinColumn(name = "product_id")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "productId")
    private ProductEntity productEntity;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "invoice_id")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "invoiceId")
    @JsonIgnore
    private InvoiceEntity invoiceEntity;
}