package LaCiguenia.webApi.product;

import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

public interface IProductServiceApi {
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readFourProducts();
}
