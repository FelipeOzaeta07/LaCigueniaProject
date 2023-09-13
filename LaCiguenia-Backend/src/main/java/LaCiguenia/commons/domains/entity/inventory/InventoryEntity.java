package LaCiguenia.commons.domains.entity.inventory;

import LaCiguenia.commons.domains.entity.product.ProductEntity;
import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

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
    private LocalDate inventoryEntryDate;

    @OneToOne
    @JoinColumn(name = "product_id")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "productId")
    private ProductEntity productEntity;
}