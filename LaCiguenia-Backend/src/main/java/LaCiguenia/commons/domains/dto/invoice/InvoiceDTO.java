package LaCiguenia.commons.domains.dto.invoice;
import LaCiguenia.commons.domains.entity.detail.DetailEntity;
import lombok.*;

import java.io.Serializable;

import java.sql.Date;
import java.util.List;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class InvoiceDTO implements Serializable
{
    private Integer invoiceId;
    private Date invoiceDate;
    private Integer invoiceIva;
    private Integer invoiceTotal;
    private List<DetailEntity> listDetail;
}
