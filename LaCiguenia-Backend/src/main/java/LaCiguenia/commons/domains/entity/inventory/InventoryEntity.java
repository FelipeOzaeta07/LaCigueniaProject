package LaCiguenia.commons.domains.entity.inventory;

import LaCiguenia.commons.domains.entity.product.ProductEntity;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;
import java.util.List;

@Builder(builderMethodName = "newInstance")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "inventory_ciguenia")
public class InventoryEntity {
    @Id
    @Column(name = "inventory_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer inventoryId;

    @Column(name = "inventory_amount")
    private Integer inventoryAmount;

    @Column(name = "inventory_entry_date")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date inventoryEntryDate;

    @Column(name = "inventory_departure_date")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date inventoryDepartureDate;

    @OneToMany(mappedBy = "inventoryEntity")
    @JsonManagedReference
    private List<ProductEntity> listProduct;
}