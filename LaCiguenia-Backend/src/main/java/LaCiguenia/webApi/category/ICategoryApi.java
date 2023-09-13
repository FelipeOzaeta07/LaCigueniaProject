package LaCiguenia.webApi.category;

import LaCiguenia.commons.domains.dto.category.CategoryDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public interface ICategoryApi {
    @PostMapping()
    ResponseEntity<GenericResponseDTO> createCategory (@RequestBody CategoryDTO categoryDTO);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readProductsForCategory (@PathVariable Integer categoryId);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readCategories ();
    @PutMapping()
    ResponseEntity<GenericResponseDTO> updateCategory (@RequestBody CategoryDTO categoryDTO);
    @DeleteMapping()
    ResponseEntity<GenericResponseDTO> deleteCategory (@PathVariable Integer categoryId);
}