package LaCiguenia.service.detail;

import LaCiguenia.commons.domains.dto.detail.DetailDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;

public interface IDetailService {
    ResponseEntity<GenericResponseDTO> createDetail(DetailDTO detailDTO);
    ResponseEntity<GenericResponseDTO> readDetail(DetailDTO detailDTO);
    ResponseEntity<GenericResponseDTO> readDetails();
    ResponseEntity<GenericResponseDTO> updateDetail(DetailDTO detailDTO);
    ResponseEntity<GenericResponseDTO> deleteDetail(Integer detailId);
}
