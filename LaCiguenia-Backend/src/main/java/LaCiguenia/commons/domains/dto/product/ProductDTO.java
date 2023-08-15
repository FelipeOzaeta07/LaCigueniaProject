package LaCiguenia.commons.domains.dto.product;

import LaCiguenia.commons.domains.dto.category.CategoryDTO;
import LaCiguenia.commons.domains.entity.category.CategoryEntity;
import lombok.*;

import java.io.Serializable;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class ProductDTO implements Serializable {

    private Integer idProduct;
    private String productName;
    private String productPrice;
    private String productDescription;
    private String productMaterials;
    private CategoryDTO categoryEntity;
}