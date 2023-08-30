package LaCiguenia.service.invoice;

import LaCiguenia.commons.domains.responseDTO.GenericResponse;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;

public interface IInvoiceComplementService {
    ResponseEntity<GenericResponseDTO> readSalesTotalInvoicesDay();
    ResponseEntity<GenericResponseDTO> readSalesTotalInvoiceMonth();
    ResponseEntity<GenericResponseDTO> readCountTotalInvoiceMonth();
}
