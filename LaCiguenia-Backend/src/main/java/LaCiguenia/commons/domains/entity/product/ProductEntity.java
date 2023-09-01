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
    private String productCode;

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
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "categoryId")
    @JsonIgnore
    private CategoryEntity categoryEntity;

}