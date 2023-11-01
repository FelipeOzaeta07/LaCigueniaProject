package LaCiguenia.webApi.cashclosure;

import LaCiguenia.commons.domains.dto.cashclosure.CashClosureDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public interface ICashClosureApi {
    @PostMapping()
    ResponseEntity<GenericResponseDTO> createCashClosure (@RequestBody CashClosureDTO cashClosureDTO);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readCashClosure (@PathVariable Integer cashClosureId);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readCashClosures ();
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readLastCashClosures ();
    @GetMapping()
    ResponseEntity<GenericResponseDTO> informationForCashClosures ();
    @GetMapping()
    ResponseEntity<GenericResponseDTO> detailMethodPaymentForCashClosures();
}