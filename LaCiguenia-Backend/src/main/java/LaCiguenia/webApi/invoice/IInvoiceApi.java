package LaCiguenia.webApi.invoice;

import LaCiguenia.commons.domains.dto.invoice.InvoiceDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public interface IInvoiceApi {
    @PostMapping()
    ResponseEntity<GenericResponseDTO> createInvoice(@RequestBody InvoiceDTO invoiceDTO);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readInvoice(@RequestBody InvoiceDTO invoiceDTO);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readInvoices();
    @PutMapping()
    ResponseEntity<GenericResponseDTO> updateInvoice(@RequestBody InvoiceDTO invoiceDTO);
    @DeleteMapping()
    ResponseEntity<GenericResponseDTO> deleteInvoice(@PathVariable Integer invoiceId);
}