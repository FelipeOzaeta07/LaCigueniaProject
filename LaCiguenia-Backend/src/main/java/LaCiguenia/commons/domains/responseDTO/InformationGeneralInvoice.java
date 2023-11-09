package LaCiguenia.commons.domains.responseDTO;

import lombok.*;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class InformationGeneralInvoice implements Serializable {
    public Double salesTotalDay;
    public Double salesTotalMonth;
    public Integer countInvoiceDay;
    public Integer countInvoiceMonth;
}