package LaCiguenia.service.cashclosure;

import LaCiguenia.commons.domains.dto.cashclosure.CashClosureDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;

public interface ICashClosureService {
    ResponseEntity<GenericResponseDTO> createCashClosure(CashClosureDTO cashClosureDTO);
    ResponseEntity<GenericResponseDTO> readCashClosure(Integer cashClosureId);
    ResponseEntity<GenericResponseDTO> readCashClosures();
    ResponseEntity<GenericResponseDTO> readLastCashClosures();
    ResponseEntity<GenericResponseDTO> informationForCashClosures();
    ResponseEntity<GenericResponseDTO> detailMethodPaymentForCashClosures();
}