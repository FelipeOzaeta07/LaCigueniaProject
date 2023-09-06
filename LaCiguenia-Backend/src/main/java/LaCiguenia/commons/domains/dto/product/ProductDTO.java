package LaCiguenia.commons.domains.dto.product;


import LaCiguenia.commons.domains.entity.category.CategoryEntity;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
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

    private String productId;
    private String productName;
    private Double productPrice;
    private String productDescription;
    @JsonIdentityReference(alwaysAsId = true)
    private CategoryEntity categoryEntity;
}