package LaCiguenia.commons.domains.dto.product;

import LaCiguenia.commons.domains.dto.category.CategoryDTO;
import LaCiguenia.commons.domains.entity.category.CategoryEntity;
import LaCiguenia.commons.domains.entity.detail.DetailEntity;
import LaCiguenia.commons.domains.entity.inventory.InventoryEntity;
import LaCiguenia.commons.domains.entity.material.MaterialEntity;
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
public class ProductDTO implements Serializable {

    private Integer productId;
    private String productName;
    private Double productPrice;
    private String productDescription;
    private List<MaterialEntity> listMaterial;
    private List<DetailEntity> listDetail;
}