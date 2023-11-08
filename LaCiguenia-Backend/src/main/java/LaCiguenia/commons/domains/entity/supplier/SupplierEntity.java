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
    private Integer supplierNit;

    @Column(name = "supplier_phone")
    private Integer supplierPhone;

    @Column(name = "supplier_location")
    private String supplierLocation;

    @Column(name = "supplier_city")
    private String supplierCity;

    @Column(name = "supplier_status")
    private String supplierStatus;
}