package LaCiguenia.service.invoice.complement;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.constans.response.invoice.IInvoiceResponse;
import LaCiguenia.commons.domains.entity.invoice.InvoiceEntity;
import LaCiguenia.commons.domains.responseDTO.GenericResponse;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import LaCiguenia.component.invoice.implement.InvoiceComponent;
import LaCiguenia.repository.invoice.IInvoiceRepository;
import LaCiguenia.service.invoice.IInvoiceComplementService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
@Log4j2

public class InvoiceComplementService implements IInvoiceComplementService {
    @Autowired
    private IInvoiceRepository iInvoiceRepository;
    @Autowired
    private InvoiceComponent invoiceComponent;

    @Override
    public ResponseEntity<GenericResponseDTO> readInvoices() {
        try{
            List<InvoiceEntity> listInvoice = this.iInvoiceRepository.findAll();
            if (!listInvoice.isEmpty()){
                Integer salesTotalDay = this.invoiceComponent.invoiceSalesTotalDay(listInvoice);
                Integer salesTotalMonth = this.invoiceComponent.invoiceSalesTotalMonth(listInvoice);
                Integer countInvoiceMonth = this.invoiceComponent.invoiceCountTotalMonth(listInvoice);
                GenericResponse genericResponse = GenericResponse.builder()
                        .objectResponseOne(salesTotalDay)
                        .objectResponseTwo(salesTotalMonth)
                        .objectResponseThree(countInvoiceMonth)
                        .build();
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(genericResponse)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }else{
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(IInvoiceResponse.INVOICES_FAIL)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .build());
            }
        }catch (Exception e){
            log.error(GeneralResponse.INTERNAL_SERVER, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(GenericResponseDTO.builder()
                            .message(GeneralResponse.INTERNAL_SERVER)
                            .objectResponse(null)
                            .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                            .build());
        }
    }
}