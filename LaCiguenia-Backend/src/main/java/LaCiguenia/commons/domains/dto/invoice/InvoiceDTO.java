package LaCiguenia.commons.domains.dto.invoice;
import LaCiguenia.commons.domains.entity.customer.CustomerEntity;
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
    private Integer InvoiceId;
    private Date InvoiceDate;
    private  Integer InvoiceInteger;

    // private List<detailEntity> listDetails;

    private CustomerEntity customerEntity;
}
