package LaCiguenia.webApi.invoice;

import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;


public interface IInvoiceApi {
    @PostMapping()
    ResponseEntity<GenericResponseDTO> readInvoices();
}
