package LaCiguenia.service.product;

import LaCiguenia.commons.domains.dto.product.ProductDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;

public interface IProductService {
    ResponseEntity<GenericResponseDTO> createProducts(ProductDTO productDTO);
    ResponseEntity<GenericResponseDTO> readProductId(Integer productId);
    ResponseEntity<GenericResponseDTO> readProduct(String productName);
    ResponseEntity<GenericResponseDTO> readProductsForCategory(Integer categoryId);
    ResponseEntity<GenericResponseDTO> readProducts();
    ResponseEntity<GenericResponseDTO> readProductsRecentlyCreate();
    ResponseEntity<GenericResponseDTO> updateProduct(ProductDTO productDTO);
    ResponseEntity<GenericResponseDTO> deleteProducts(Integer  productId);
    ResponseEntity<GenericResponseDTO> readProductForName(String  productName);
}