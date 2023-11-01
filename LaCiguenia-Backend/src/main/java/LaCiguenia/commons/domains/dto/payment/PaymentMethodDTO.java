package LaCiguenia.commons.domains.dto.payment;


import lombok.*;
import java.io.Serializable;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class PaymentMethodDTO implements Serializable {
    private Integer paymentMethodId;
    private String paymentMethodName;
    private String paymentMethodDescription;
    private String paymentMethodStatus;
}