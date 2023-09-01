package LaCiguenia.commons.domains.dto.detail;

import LaCiguenia.commons.domains.entity.invoice.InvoiceEntity;
import LaCiguenia.commons.domains.entity.product.ProductEntity;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import lombok.*;
import java.io.Serializable;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class DetailDTO implements Serializable {
    private Integer detailId;
    private Integer detailAmount;
    private Integer detailSubTotal;
    @JsonIdentityReference(alwaysAsId = true)
    private ProductEntity productEntity;
    @JsonIdentityReference(alwaysAsId = true)
    private InvoiceEntity invoiceEntity;
}