package LaCiguenia.service.product;

import LaCiguenia.commons.domains.dto.product.ProductDTO;
import LaCiguenia.commons.domains.entity.product.ProductEntity;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;

public interface IProductComplementService {
    ResponseEntity<GenericResponseDTO> readProductsFour();
}
