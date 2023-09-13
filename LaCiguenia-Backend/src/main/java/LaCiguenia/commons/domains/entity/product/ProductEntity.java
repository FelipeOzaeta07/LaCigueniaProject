package LaCiguenia.commons.domains.entity.product;

import LaCiguenia.commons.domains.entity.category.CategoryEntity;
import LaCiguenia.commons.domains.entity.detail.DetailEntity;
import LaCiguenia.commons.domains.entity.inventory.InventoryEntity;
import LaCiguenia.commons.domains.entity.material.MaterialEntity;
import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Builder(builderMethodName = "newInstance")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "product_ciguenia")
public class ProductEntity {
    @Id
    @Column(name = "product_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer productId;

    @Column(name = "product_name")
    private String productName;

    @Column(name = "product_price")
    private Double productPrice;

    @Column(name = "product_iva")
    private Double productIva;

    @Column(name = "product_cost")
    private Double productCost;

    @Column(name = "product_description")
    private String productDescription;

    @Column(name = "product_status")
    private String productStatus;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "categoryId")
    @JsonIgnore
    private CategoryEntity categoryEntity;

    @OneToMany(mappedBy = "productEntity")
    @JsonManagedReference
    @JsonIgnore
    private List<DetailEntity> listDetail;

    @OneToMany(mappedBy = "productEntity")
    @JsonManagedReference
    @JsonIgnore
    private List<MaterialEntity> listMaterial;

    @OneToOne(mappedBy = "productEntity", fetch = FetchType.LAZY)
    @JsonIgnore
    private InventoryEntity inventoryEntity;
}