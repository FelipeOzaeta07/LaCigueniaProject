package LaCiguenia.commons.domains.entity.supplier;


import jakarta.persistence.*;
import lombok.*;

@Builder(builderMethodName = "newInstance")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "supplier_ciguenia")
public class SupplierEntity {
    @Id
    @Column(name = "supplier_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer supplierId;

    @Column(name = "supplier_name")
    private String supplierName;

    @Column(name = "supplier_nit")
    private String supplierNit;

    @Column(name = "supplier_number_phone")
    private String supplierNumberPhone;

    @Column(name = "supplier_email")
    private String supplierEmail;

    @Column(name = "supplier_address")
    private String supplierAddress;

    @Column(name = "supplier_city")
    private String supplierCity;

    @Column(name = "supplier_status")
    private String supplierStatus;
}