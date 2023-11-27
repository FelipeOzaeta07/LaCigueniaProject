package LaCiguenia.webApi.invoice;

import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

public interface IInvoiceComplementApi {
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readInformationGeneralInvoices(@PathVariable Integer storeId);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> totalSalesPreviousDay();
}
