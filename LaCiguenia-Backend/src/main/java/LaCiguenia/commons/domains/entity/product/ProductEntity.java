package LaCiguenia.commons.domains.entity.product;

import LaCiguenia.commons.domains.entity.category.CategoryEntity;
import LaCiguenia.commons.domains.entity.detail.DetailEntity;
import LaCiguenia.commons.domains.entity.inventory.InventoryEntity;
import LaCiguenia.commons.domains.entity.material.MaterialEntity;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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

    @Column(name = "product_description")
    private String productDescription;

    @OneToMany(mappedBy = "productEntity")
    @JsonManagedReference
    private List<MaterialEntity> listMaterial;

    @OneToMany(mappedBy = "productEntity")
    @JsonManagedReference
    private List<DetailEntity> listDetail;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    @JsonBackReference
    private CategoryEntity categoryEntity;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "inventory_id")
    @JsonBackReference
    private InventoryEntity inventoryEntity;
}