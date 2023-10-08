package LaCiguenia.webApi.product;

import LaCiguenia.commons.domains.dto.product.ProductDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public interface IProductApi {
    @PostMapping()
    ResponseEntity<GenericResponseDTO> createProducts(@RequestBody ProductDTO productDTO);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readProductId(@PathVariable Integer productId);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readProduct(@PathVariable String productName);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readProducts();
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readProductsRecentlyCreate();
    @PutMapping()
    ResponseEntity<GenericResponseDTO> updateProduct(@RequestBody ProductDTO productDTO);
    @DeleteMapping()
    ResponseEntity<GenericResponseDTO> deleteProducts(@PathVariable Integer productId);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readProductForName(@PathVariable String productName);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readProductForCategory(@PathVariable Integer categoryId);
}