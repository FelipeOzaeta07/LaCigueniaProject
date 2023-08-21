package LaCiguenia.webApi.product;

import LaCiguenia.commons.domains.dto.product.ProductDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public interface IProductApi {
    @PostMapping()
    ResponseEntity<GenericResponseDTO> createProducts(@RequestBody ProductDTO productDTO);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readProduct(@RequestBody ProductDTO productDTO);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readProducts();
    @PutMapping()
    ResponseEntity<GenericResponseDTO> updateProduct(@RequestBody ProductDTO productDTO);
    @DeleteMapping()
    ResponseEntity<GenericResponseDTO> deleteProducts(@RequestBody ProductDTO productDTO);
}

