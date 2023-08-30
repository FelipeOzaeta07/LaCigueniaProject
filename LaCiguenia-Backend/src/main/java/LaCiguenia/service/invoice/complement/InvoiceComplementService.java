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
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Calendar;
import java.util.List;

import static java.util.Calendar.*;

@Service
@Log4j2

public class InvoiceComplementService implements IInvoiceComplementService {
    @Autowired
    private IInvoiceRepository iInvoiceRepository;
    @Autowired
    private InvoiceComponent invoiceComponent;
    private final LocalDate dateCurrent = LocalDate.now();
    private  final Calendar calendar = getInstance();
    @Override
    public ResponseEntity<GenericResponseDTO> readSalesTotalInvoicesDay() {
        try{
            List<InvoiceEntity> listInvoice = this.iInvoiceRepository.findByDateDay(dateCurrent);
            if (!listInvoice.isEmpty()){
                Integer salesTotalDay = this.invoiceComponent.invoiceSalesTotalDay(listInvoice);
                GenericResponse genericResponse = GenericResponse.builder()
                        .objectResponseOne(salesTotalDay)
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
    @Override
    public ResponseEntity<GenericResponseDTO> readSalesTotalInvoiceMonth() {
        try{
            int currentMonth = calendar.get(Calendar.MONTH) + 1;
            List<InvoiceEntity> listInvoice = this.iInvoiceRepository.findByDateMonth(currentMonth);
            if (!listInvoice.isEmpty()){
                Integer salesTotalMonth = this.invoiceComponent.invoiceSalesTotalMonth(listInvoice);
                GenericResponse genericResponse = GenericResponse.builder()
                        .objectResponseOne(salesTotalMonth)
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
    @Override
    public ResponseEntity<GenericResponseDTO> readCountTotalInvoiceMonth() {
        try{

            int currentMonth = calendar.get(Calendar.MONTH) + 1;
            List<InvoiceEntity> listInvoice = this.iInvoiceRepository.findByDateMonth(currentMonth);
            if (!listInvoice.isEmpty()){
                Integer salesTotalInvoice = this.invoiceComponent.invoiceCountTotalMonth(listInvoice);
                GenericResponse genericResponse = GenericResponse.builder()
                        .objectResponseOne(salesTotalInvoice)
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