package LaCiguenia.webApi.invoice;

import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

public interface IInvoiceComplementApi {
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readInformationGeneralInvoices();
}
