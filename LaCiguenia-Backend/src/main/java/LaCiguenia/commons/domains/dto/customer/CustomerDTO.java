package LaCiguenia.commons.domains.dto.customer;

import LaCiguenia.commons.domains.entity.invoice.InvoiceEntity;
import lombok.*;

import java.io.Serializable;
import java.util.List;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class CustomerDTO implements Serializable {
    private Integer customerId;
    private String customerName;
    private String customerIdentification;
    private String customerPhoneNumber;
    private String customerEmail;
    private String customerAddress;
}
