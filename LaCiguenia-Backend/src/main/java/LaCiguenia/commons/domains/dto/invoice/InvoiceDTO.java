package LaCiguenia.commons.domains.dto.invoice;

import LaCiguenia.commons.domains.dto.customer.CustomerDTO;
import LaCiguenia.commons.domains.dto.detail.DetailDTO;
import LaCiguenia.commons.domains.dto.opening.OpeningDTO;
import LaCiguenia.commons.domains.dto.payment.PaymentMethodDTO;
import LaCiguenia.commons.domains.entity.customer.CustomerEntity;
import LaCiguenia.commons.domains.entity.opening.OpeningEntity;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import lombok.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class InvoiceDTO implements Serializable {

    private Integer invoiceId;
    private LocalDate invoiceDate;
    private Integer invoiceIva;
    private Integer invoiceTotal;
    private String invoiceStatus;
    @JsonIdentityReference(alwaysAsId = true)
    private CustomerDTO customerEntity;
    @JsonIdentityReference(alwaysAsId = true)
    private OpeningDTO openingEntity;
    @JsonIdentityReference(alwaysAsId = true)
    private PaymentMethodDTO paymentMethodEntity;
}