package LaCiguenia.commons.converter.product;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.constans.response.user.IUserResponse;
import LaCiguenia.commons.domains.dto.category.CategoryDTO;
import LaCiguenia.commons.domains.dto.product.ProductDTO;
import LaCiguenia.commons.domains.entity.category.CategoryEntity;
import LaCiguenia.commons.domains.entity.product.ProductEntity;
import LaCiguenia.commons.helpers.HelperMapper;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

@Component
@Log4j2
public class ProductConverter {
    public ProductDTO convertProductEntityToProductDTO(ProductEntity productEntity) {
        ProductDTO productDTO = new ProductDTO();
        try {
            productDTO = HelperMapper.modelMapper().map(productEntity, ProductDTO.class);
            CategoryDTO categoryDTO = HelperMapper.modelMapper()
                    .map(productEntity.getCategoryEntity(), CategoryDTO.class);
            productDTO.setCategoryEntity(categoryDTO);
        } catch (Exception e) {
            log.error(GeneralResponse.DOCUMENT_FAIL + e);
        }
        return productDTO;
    }

    public ProductEntity convertProductDTOToProductEntity(ProductDTO productDTO) {
        ProductEntity productEntity = new ProductEntity();
        try {
            productEntity = HelperMapper.modelMapper().map(productDTO, ProductEntity.class);
            CategoryEntity categoryEntity = HelperMapper.modelMapper()
                    .map(productDTO.getCategoryEntity(), CategoryEntity.class);
            productEntity.setCategoryEntity(categoryEntity);
        } catch (Exception e) {
            log.error(GeneralResponse.DOCUMENT_FAIL + e);
        }
        return productEntity;
    }
}