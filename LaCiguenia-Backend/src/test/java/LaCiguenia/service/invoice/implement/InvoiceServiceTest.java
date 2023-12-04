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
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class InvoiceServiceTest {

    @Mock
    private IInvoiceRepository iInvoiceRepository;
    @Mock
    private IOpeningRepository iOpeningRepository;
    @Mock
    private InvoiceConverter invoiceConverter;
    @Mock
    private NotificationComponent notificationComponent;
    private InvoiceService invoiceService;
    @BeforeEach
    void setUp() throws Exception{
        MockitoAnnotations.openMocks(this).close();
        invoiceService = new InvoiceService(iInvoiceRepository, iOpeningRepository, invoiceConverter, notificationComponent);
    }

    @Test
    void testCreateInvoiceSuccess() {
        InvoiceDTO invoiceDTO = new InvoiceDTO();
        InvoiceEntity invoiceEntity = new InvoiceEntity();
        OpeningEntity openingEntity = new OpeningEntity();

        when(iInvoiceRepository.findById(invoiceDTO.getInvoiceId())).thenReturn(Optional.empty());
        when(invoiceConverter.convertInvoiceDTOToInvoiceEntity(invoiceDTO)).thenReturn(invoiceEntity);
        when(iOpeningRepository.findById(any())).thenReturn(Optional.of(openingEntity));
        when(iOpeningRepository.lastOpeningId()).thenReturn(1);

        ResponseEntity<GenericResponseDTO> response = invoiceService.createInvoice(invoiceDTO);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_SUCCESS, response.getBody().getMessage());
        assertEquals(GeneralResponse.CREATE_SUCCESS, response.getBody().getObjectResponse());
        assertEquals(1, response.getBody().getObjectId());
        assertEquals(HttpStatus.OK.value(), response.getBody().getStatusCode());

        verify(iInvoiceRepository, times(1)).findById(invoiceDTO.getInvoiceId());
        verify(invoiceConverter, times(1)).convertInvoiceDTOToInvoiceEntity(invoiceDTO);
        verify(iOpeningRepository, times(1)).findById(1);
        verify(iInvoiceRepository, times(1)).save(invoiceEntity);
    }

    @Test
    void testCreateInvoiceFailure() {
        InvoiceDTO invoiceDTO = new InvoiceDTO();
        InvoiceEntity existingInvoiceEntity = new InvoiceEntity();

        when(iInvoiceRepository.findById(invoiceDTO.getInvoiceId())).thenReturn(Optional.of(existingInvoiceEntity));

        ResponseEntity<GenericResponseDTO> response = invoiceService.createInvoice(invoiceDTO);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_FAIL, response.getBody().getMessage());
        assertEquals(GeneralResponse.CREATE_FAIL, response.getBody().getObjectResponse());
        assertEquals(HttpStatus.OK.value(), response.getBody().getStatusCode());

        verify(iInvoiceRepository, times(1)).findById(invoiceDTO.getInvoiceId());
        verifyNoInteractions(invoiceConverter);
        verifyNoInteractions(iOpeningRepository);
        verifyNoInteractions(iInvoiceRepository);
    }

    @Test
    void testReadInvoiceSuccess() {
        InvoiceDTO invoiceDTO = new InvoiceDTO();
        InvoiceEntity invoiceEntity = new InvoiceEntity();
        when(iInvoiceRepository.findById(invoiceDTO.getInvoiceId())).thenReturn(Optional.of(invoiceEntity));

        ResponseEntity<GenericResponseDTO> response = invoiceService.readInvoice(invoiceDTO);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_SUCCESS, response.getBody().getMessage());
        assertEquals(invoiceEntity, response.getBody().getObjectResponse().getClass());
        assertEquals(HttpStatus.OK.value(), response.getBody().getStatusCode());

        verify(iInvoiceRepository, times(1)).findById(invoiceDTO.getInvoiceId());
    }

    @Test
    void testReadInvoiceFailure() {
        InvoiceDTO invoiceDTO = new InvoiceDTO();
        when(iInvoiceRepository.findById(invoiceDTO.getInvoiceId())).thenReturn(Optional.empty());

        ResponseEntity<GenericResponseDTO> response = invoiceService.readInvoice(invoiceDTO);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_FAIL, response.getBody().getMessage());
        assertEquals(IInvoiceResponse.INVOICE_FAIL, response.getBody().getObjectResponse());
        assertEquals(HttpStatus.BAD_REQUEST.value(), response.getBody().getStatusCode());

        verify(iInvoiceRepository, times(1)).findById(invoiceDTO.getInvoiceId());
    }

    @Test
    void testReadInvoicesSuccess() {
        List<InvoiceEntity> invoiceEntities = new ArrayList<>();
        invoiceEntities.add(new InvoiceEntity());
        when(iInvoiceRepository.findAll()).thenReturn(invoiceEntities);

        ResponseEntity<GenericResponseDTO> response = invoiceService.readInvoices();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_SUCCESS, response.getBody().getMessage());
        assertEquals(invoiceEntities.size(), response.getBody().getObjectResponse());
        assertEquals(HttpStatus.OK.value(), response.getBody().getStatusCode());

        verify(iInvoiceRepository, times(1)).findAll();
    }

    @Test
    void testReadInvoicesFailure() {
        when(iInvoiceRepository.findAll()).thenReturn(new ArrayList<>());

        ResponseEntity<GenericResponseDTO> response = invoiceService.readInvoices();

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_FAIL, response.getBody().getMessage());
        assertEquals(IInvoiceResponse.INVOICES_FAIL, response.getBody().getObjectResponse());
        assertEquals(HttpStatus.BAD_REQUEST.value(), response.getBody().getStatusCode());

        verify(iInvoiceRepository, times(1)).findAll();
    }

    @Test
    void testUpdateInvoiceSuccess() {
        InvoiceDTO invoiceDTO = new InvoiceDTO();
        InvoiceEntity existingInvoice = new InvoiceEntity();

        when(iInvoiceRepository.findById(invoiceDTO.getInvoiceId())).thenReturn(Optional.of(existingInvoice));

        ResponseEntity<GenericResponseDTO> response = invoiceService.updateInvoice(invoiceDTO);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_SUCCESS, response.getBody().getMessage());
        assertEquals(GeneralResponse.UPDATE_SUCCESS, response.getBody().getObjectResponse());
        assertEquals(HttpStatus.OK.value(), response.getBody().getStatusCode());

        verify(iInvoiceRepository, times(1)).findById(invoiceDTO.getInvoiceId());
        verify(iInvoiceRepository, times(1)).save(existingInvoice);
    }

    @Test
    void testUpdateInvoiceFailure() {
        InvoiceDTO invoiceDTO = new InvoiceDTO();

        when(iInvoiceRepository.findById(invoiceDTO.getInvoiceId())).thenReturn(Optional.empty());

        ResponseEntity<GenericResponseDTO> response = invoiceService.updateInvoice(invoiceDTO);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_FAIL, response.getBody().getMessage());
        assertEquals(IInvoiceResponse.INVOICE_FAIL, response.getBody().getObjectResponse());
        assertEquals(HttpStatus.BAD_REQUEST.value(), response.getBody().getStatusCode());

        verify(iInvoiceRepository, times(1)).findById(invoiceDTO.getInvoiceId());
        verify(iInvoiceRepository, never()).save(any());
    }

    @Test
    void testDeleteInvoiceSuccess() {
        Integer invoiceId = 123;
        InvoiceEntity existingInvoice = new InvoiceEntity();

        when(iInvoiceRepository.findById(invoiceId)).thenReturn(Optional.of(existingInvoice));

        ResponseEntity<GenericResponseDTO> response = invoiceService.deleteInvoice(invoiceId);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_SUCCESS, response.getBody().getMessage());
        assertEquals(GeneralResponse.DELETE_SUCCESS, response.getBody().getObjectResponse());
        assertEquals(HttpStatus.OK.value(), response.getBody().getStatusCode());

        verify(iInvoiceRepository, times(1)).findById(invoiceId);
        verify(iInvoiceRepository, times(1)).save(existingInvoice);
    }

    @Test
    void testDeleteInvoiceFailure() {
        Integer invoiceId = 123;

        when(iInvoiceRepository.findById(invoiceId)).thenReturn(Optional.empty());

        ResponseEntity<GenericResponseDTO> response = invoiceService.deleteInvoice(invoiceId);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_FAIL, response.getBody().getMessage());
        assertEquals(IInvoiceResponse.INVOICE_FAIL, response.getBody().getObjectResponse());
        assertEquals(HttpStatus.BAD_REQUEST.value(), response.getBody().getStatusCode());

        verify(iInvoiceRepository, times(1)).findById(invoiceId);
        verify(iInvoiceRepository, never()).save(any());
    }
}