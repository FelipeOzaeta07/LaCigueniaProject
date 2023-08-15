package LaCiguenia.webApi.category;

import LaCiguenia.commons.domains.dto.category.CategoryDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public interface ICategoryApi {

    ResponseEntity<GenericResponseDTO> createCategory (CategoryDTO categoryDTO);

    ResponseEntity<GenericResponseDTO> readCategory (CategoryDTO categoryDTO);

    ResponseEntity<GenericResponseDTO> readCategories ();

    ResponseEntity<GenericResponseDTO> updateCategory (CategoryDTO categoryDTO);

    ResponseEntity<GenericResponseDTO> deleteCategory (CategoryDTO categoryDTO);
}
