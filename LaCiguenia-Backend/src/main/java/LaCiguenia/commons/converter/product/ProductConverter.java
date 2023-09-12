package LaCiguenia.commons.converter.product;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.domains.dto.product.ProductDTO;
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
        } catch (Exception e) {
            log.error(GeneralResponse.DOCUMENT_FAIL + e);
        }
        return productDTO;
    }

    public ProductEntity convertProductDTOToProductEntity(ProductDTO productDTO) {
        ProductEntity productEntity = new ProductEntity();
        try {
            productEntity = HelperMapper.modelMapper().map(productDTO, ProductEntity.class);
        } catch (Exception e) {
            log.error(GeneralResponse.DOCUMENT_FAIL + e);
        }
        return productEntity;
    }
}