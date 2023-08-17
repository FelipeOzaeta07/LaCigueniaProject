package LaCiguenia.commons.domains.dto.material;

import LaCiguenia.commons.domains.entity.product.ProductEntity;
import lombok.*;

import java.io.Serializable;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class MaterialDTO implements Serializable {
    private Integer materialId;
    private String materialName;
    private String materialDescription;
    private ProductEntity productEntity;
}
