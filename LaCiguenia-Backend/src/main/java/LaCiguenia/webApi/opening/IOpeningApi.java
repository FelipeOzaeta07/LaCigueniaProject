package LaCiguenia.webApi.opening;

import LaCiguenia.commons.domains.dto.opening.OpeningDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public interface IOpeningApi {
    @PostMapping()
    ResponseEntity<GenericResponseDTO> createOpening(@RequestBody OpeningDTO openingDTO);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readLastOpening();
}