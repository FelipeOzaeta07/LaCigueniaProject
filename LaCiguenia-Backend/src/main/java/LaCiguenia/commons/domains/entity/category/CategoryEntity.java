package LaCiguenia.commons.domains.entity.category;

import LaCiguenia.commons.domains.entity.product.ProductEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Table(name = "category_ciguenia")
public class CategoryEntity {
    @Id
    @Column(name = "category_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer categoryId;

    @Column(name = "category_name")
    private String CategoryName;

    @Column(name = "category_description")
    private String categoryDescription;

    @Column(name = "category_status")
    private String categoryStatus;

    @OneToMany(mappedBy = "categoryEntity")
    @JsonManagedReference
    @JsonIgnore
    private List<ProductEntity> listProducts;
}