package LaCiguenia.commons.domains.dto.customer;

import lombok.*;

import java.io.Serializable;

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
    private String customerLastName;
    private String customerPhoneNumber;
    private String customerAddress;
    private String customerEmail;
}
