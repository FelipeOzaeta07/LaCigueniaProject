package LaCiguenia.service.invoice.implement;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.converter.invoice.InvoiceConverter;
import LaCiguenia.commons.domains.dto.invoice.InvoiceDTO;
import LaCiguenia.commons.domains.entity.invoice.InvoiceEntity;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import LaCiguenia.component.invoice.implement.InvoiceComponent;
import LaCiguenia.repository.invoice.IInvoiceRepository;
import LaCiguenia.service.invoice.IInvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class InvoiceService implements IInvoiceService {
    @Autowired
    private IInvoiceRepository iInvoiceRepository;

    @Autowired
    private InvoiceConverter invoiceConverter;

    @Autowired
    private InvoiceComponent invoiceComponent;

    @Override
    public ResponseEntity<GenericResponseDTO> createInvoice(InvoiceDTO invoiceDTO) {
        return null;
    }

    @Override
    public ResponseEntity<GenericResponseDTO> readInvoice(InvoiceDTO invoiceDTO) {
        return null;
    }

    @Override
    public ResponseEntity<GenericResponseDTO> readInvoices() {
        try{
            List<InvoiceEntity> listInvoice = this.iInvoiceRepository.findAll();
            Integer dailySales = invoiceComponent.dailySales(listInvoice);
            Integer totalSales = invoiceComponent.totalSales(listInvoice);
            if (dailySales != null){
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(dailySales + " " + totalSales)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .build());
            }else{
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse("no hay ventas del dia")
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .build());
            }
        }catch (Exception e){
            return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                    .message(GeneralResponse.OPERATION_FAIL)
                    .objectResponse(GeneralResponse.INTERNAL_SERVER)
                    .statusCode(HttpStatus.BAD_REQUEST.value())
                    .build());
        }

    }

    @Override
    public ResponseEntity<GenericResponseDTO> updateInvoice(InvoiceDTO invoiceDTO) {
        return null;
    }

    @Override
    public ResponseEntity<GenericResponseDTO> deleteInvoice(InvoiceDTO invoiceDTO) {
        return null;
    }
}
