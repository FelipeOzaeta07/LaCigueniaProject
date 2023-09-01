package LaCiguenia.service.product;

import LaCiguenia.commons.domains.dto.product.ProductDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;

public interface IProductService {
    ResponseEntity<GenericResponseDTO> createProducts(ProductDTO productDTO);
    ResponseEntity<GenericResponseDTO> readProduct(ProductDTO productDTO);
    ResponseEntity<GenericResponseDTO> readProducts();
    ResponseEntity<GenericResponseDTO> updateProduct(ProductDTO productDTO);
    ResponseEntity<GenericResponseDTO> deleteProducts(String  productCode);
}