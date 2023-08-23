package LaCiguenia.commons.domains.dto.detail;

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
public class DetailDTO implements Serializable {
    private Integer detailId;
    private Integer detailAmount;
    private Integer detailSubTotal;
    private List<ProductEntity> listProducts;
}