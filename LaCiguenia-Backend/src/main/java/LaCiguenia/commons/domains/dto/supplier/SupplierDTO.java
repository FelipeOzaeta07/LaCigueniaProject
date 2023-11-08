package LaCiguenia.commons.domains.dto.supplier;
import lombok.*;

import java.io.Serializable;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class SupplierDTO implements Serializable {
    private Integer supplierId;
    private String supplierName;
    private Integer supplierNit;
    private Integer supplierPhone;
    private String supplierLocation;
    private String supplierCity;
    private String supplierStatus;
}