package LaCiguenia.service.opening;

import LaCiguenia.commons.domains.dto.opening.OpeningDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;

public interface IOpeningService {
    ResponseEntity<GenericResponseDTO> createOpening(OpeningDTO openingDTO);
    ResponseEntity<GenericResponseDTO> readLastOpening();
}