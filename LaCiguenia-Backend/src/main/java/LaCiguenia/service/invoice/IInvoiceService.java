package LaCiguenia.service.invoice;

import LaCiguenia.commons.domains.dto.invoice.InvoiceDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;

public interface IInvoiceService {
        ResponseEntity<GenericResponseDTO> createInvoice(InvoiceDTO invoiceDTO);
        ResponseEntity<GenericResponseDTO> readInvoice(InvoiceDTO invoiceDTO);
        ResponseEntity<GenericResponseDTO> readInvoices();
        ResponseEntity<GenericResponseDTO> updateInvoice(InvoiceDTO invoiceDTO);
        ResponseEntity<GenericResponseDTO> deleteInvoice(Integer invoiceId);
}