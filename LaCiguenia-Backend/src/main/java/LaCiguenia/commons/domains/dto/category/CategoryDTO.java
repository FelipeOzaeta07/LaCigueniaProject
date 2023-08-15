package LaCiguenia.commons.domains.dto.category;


import LaCiguenia.commons.domains.dto.product.ProductDTO;
import LaCiguenia.commons.domains.entity.product.ProductEntity;
import lombok.*;

import java.io.Serializable;
import java.util.List;


@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class CategoryDTO implements Serializable {
    private Integer categoryId;
    private String CategoryName;
    private String categoryDescription;
    private List<ProductEntity> listProducts;
}