package LaCiguenia.commons.domains.dto.invoice;
import lombok.*;

import java.io.Serializable;

import java.sql.Date;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class InvoiceDTO implements Serializable
{
    private Integer InvoiceId;
    private Date InvoiceDate;

    private  Integer InvoiceInteger;
}
