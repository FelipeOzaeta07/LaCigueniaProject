package LaCiguenia.service.invoice.implement;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.constans.response.invoice.IInvoiceResponse;
import LaCiguenia.commons.domains.entity.invoice.InvoiceEntity;
import LaCiguenia.commons.domains.responseDTO.InformationGeneralInvoice;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import LaCiguenia.commons.domains.wrapper.IDetailExpenseForPayment;
import LaCiguenia.component.invoice.implement.InvoiceComponent;
import LaCiguenia.repository.expense.IExpenseRepository;
import LaCiguenia.repository.invoice.IInvoiceRepository;
import LaCiguenia.service.invoice.IInvoiceComplementService;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Log4j2
public class InvoiceComplementService implements IInvoiceComplementService {

    private final IInvoiceRepository iInvoiceRepository;
    private final InvoiceComponent invoiceComponent;
    private final IExpenseRepository iExpenseRepository;

    public InvoiceComplementService(IInvoiceRepository iInvoiceRepository, InvoiceComponent invoiceComponent, IExpenseRepository iExpenseRepository) {
        this.iInvoiceRepository = iInvoiceRepository;
        this.invoiceComponent = invoiceComponent;
        this.iExpenseRepository = iExpenseRepository;
    }


    @Override
    public ResponseEntity<GenericResponseDTO> readInformationGeneralInvoices(Integer storeId) {
        try{
            List<InvoiceEntity> listInvoice = this.iInvoiceRepository.InformationGeneralForStore(storeId);
            if (!listInvoice.isEmpty()){
                InformationGeneralInvoice informationGeneralInvoice = new InformationGeneralInvoice();
                informationGeneralInvoice.salesTotalDay = this.invoiceComponent.invoiceSalesTotalDay(listInvoice);
                informationGeneralInvoice.salesTotalMonth = this.invoiceComponent.invoiceSalesTotalMonth(listInvoice);
                informationGeneralInvoice.countInvoiceMonth = this.invoiceComponent.invoiceCountTotalMonth(listInvoice);
                informationGeneralInvoice.countInvoiceDay = this.invoiceComponent.invoiceCountTotalToday(listInvoice);
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(informationGeneralInvoice)
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
    public ResponseEntity<GenericResponseDTO> readInvoicesForMethodPaymentOpeningBox() {
        try{
            List<IDetailExpenseForPayment> listInvoice = this.iInvoiceRepository.valueSalesForPaymentMethod();
            if (!listInvoice.isEmpty()){
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(null)
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
    public ResponseEntity<GenericResponseDTO> totalSalesPreviousDay() {
        try{
            Integer totalSalesPreviousDay = this.iInvoiceRepository.totalSalesPreviousDay();
            return ResponseEntity.ok(GenericResponseDTO.builder()
                    .message(GeneralResponse.OPERATION_SUCCESS)
                    .objectResponse(totalSalesPreviousDay)
                    .statusCode(HttpStatus.OK.value())
                    .build());
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