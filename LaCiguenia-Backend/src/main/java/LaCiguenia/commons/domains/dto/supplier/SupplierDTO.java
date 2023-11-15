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
    private String supplierNit;
    private String supplierNumberPhone;
    private String supplierEmail;
    private String supplierAddress;
    private String supplierCity;
    private String supplierStatus;
}