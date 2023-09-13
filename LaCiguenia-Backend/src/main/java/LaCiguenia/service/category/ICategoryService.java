package LaCiguenia.service.category;

import LaCiguenia.commons.domains.dto.category.CategoryDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;

public interface ICategoryService {
    ResponseEntity<GenericResponseDTO> createCategory (CategoryDTO categoryDTO);
    ResponseEntity<GenericResponseDTO> readProductsForCategory (Integer categoryId);
    ResponseEntity<GenericResponseDTO> readCategories ();
    ResponseEntity<GenericResponseDTO> updateCategory (CategoryDTO categoryDTO);
    ResponseEntity<GenericResponseDTO> deleteCategory (Integer categoryId);
}