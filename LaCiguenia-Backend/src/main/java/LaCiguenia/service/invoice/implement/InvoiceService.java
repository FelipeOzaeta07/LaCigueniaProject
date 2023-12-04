package LaCiguenia.service.invoice.implement;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.constans.response.invoice.IInvoiceResponse;
import LaCiguenia.commons.converter.invoice.InvoiceConverter;
import LaCiguenia.commons.domains.dto.invoice.InvoiceDTO;
import LaCiguenia.commons.domains.entity.invoice.InvoiceEntity;
import LaCiguenia.commons.domains.entity.opening.OpeningEntity;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import LaCiguenia.component.notification.implement.NotificationComponent;
import LaCiguenia.repository.invoice.IInvoiceRepository;
import LaCiguenia.repository.opening.IOpeningRepository;
import LaCiguenia.service.invoice.IInvoiceService;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Log4j2
public class InvoiceService implements IInvoiceService {


    private final IInvoiceRepository iInvoiceRepository;
    private final IOpeningRepository iOpeningRepository;
    private final InvoiceConverter invoiceConverter;
    private final NotificationComponent notificationComponent;

    public InvoiceService(IInvoiceRepository iInvoiceRepository, IOpeningRepository iOpeningRepository,
                          InvoiceConverter invoiceConverter, NotificationComponent notificationComponent) {
        this.iInvoiceRepository = iInvoiceRepository;
        this.iOpeningRepository = iOpeningRepository;
        this.invoiceConverter = invoiceConverter;
        this.notificationComponent = notificationComponent;
    }

    @Override
    public ResponseEntity<GenericResponseDTO> createInvoice(InvoiceDTO invoiceDTO) {
        try {
            Optional<InvoiceEntity> invoiceExist = this.iInvoiceRepository.findById(invoiceDTO.getInvoiceId());
            if (!invoiceExist.isPresent()){
                InvoiceEntity invoiceEntity = this.invoiceConverter.convertInvoiceDTOToInvoiceEntity(invoiceDTO);
                Optional<OpeningEntity> openingEntity =
                        this.iOpeningRepository.findById(this.iOpeningRepository.lastOpeningId());
                invoiceEntity.setOpeningEntity(openingEntity.get());
                this.iInvoiceRepository.save(invoiceEntity);
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(GeneralResponse.CREATE_SUCCESS)
                        .objectId(this.iInvoiceRepository.lastInvoiceId())
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }else {
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(GeneralResponse.CREATE_FAIL)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }
        }catch (Exception e) {
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
    public ResponseEntity<GenericResponseDTO> readInvoice(InvoiceDTO invoiceDTO) {
        try {
            Optional<InvoiceEntity> invoiceExist = this.iInvoiceRepository.findById(invoiceDTO.getInvoiceId());
            if (invoiceExist.isPresent()){
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(invoiceExist)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }else {
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(IInvoiceResponse.INVOICE_FAIL)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .build());
            }
        }catch (Exception e) {
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
    public ResponseEntity<GenericResponseDTO> readInvoices() {
        List<InvoiceDTO> invoiceDTOList = new ArrayList<>();
        try {
            List<InvoiceEntity> listInvoiceExist = this.iInvoiceRepository.findAll();
            listInvoiceExist.forEach(invoiceEntity ->
                   invoiceDTOList.add(invoiceConverter.convertInvoiceEntityToInvoiceDTO(invoiceEntity)));
            if (!listInvoiceExist.isEmpty()){
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(invoiceDTOList)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }else {
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(IInvoiceResponse.INVOICES_FAIL)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .build());
            }
        }catch (Exception e) {
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
    public ResponseEntity<GenericResponseDTO> updateInvoice(InvoiceDTO invoiceDTO) {
        try {
            Optional<InvoiceEntity> invoiceExist = this.iInvoiceRepository.findById(invoiceDTO.getInvoiceId());
            if (invoiceExist.isPresent()){
                InvoiceEntity invoiceEntity = this.invoiceConverter.convertInvoiceDTOToInvoiceEntity(invoiceDTO);
                this.iInvoiceRepository.save(invoiceEntity);
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(GeneralResponse.UPDATE_SUCCESS)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }else {
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(IInvoiceResponse.INVOICE_FAIL)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .build());
            }
        }catch (Exception e) {
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
    public ResponseEntity<GenericResponseDTO> deleteInvoice(Integer invoiceId) {
        try {
            Optional<InvoiceEntity> invoiceExist = this.iInvoiceRepository.findInvoiceForOpening(invoiceId);
            if (invoiceExist.isPresent()){
                invoiceExist.get().setInvoiceStatus("Anulado");
                this.iInvoiceRepository.save(invoiceExist.get());
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(GeneralResponse.DELETE_SUCCESS)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }else {
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(IInvoiceResponse.INVOICE_FAIL)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .build());
            }
        }catch (Exception e) {
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