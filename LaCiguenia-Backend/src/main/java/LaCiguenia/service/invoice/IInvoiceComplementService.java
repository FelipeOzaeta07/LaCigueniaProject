package LaCiguenia.service.invoice;

import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;

public interface IInvoiceComplementService {
    ResponseEntity<GenericResponseDTO> readInformationGeneralInvoices();
    ResponseEntity<GenericResponseDTO> readInvoicesForMethodPaymentOpeningBox();
    ResponseEntity<GenericResponseDTO> totalSalesPreviousDay();
}