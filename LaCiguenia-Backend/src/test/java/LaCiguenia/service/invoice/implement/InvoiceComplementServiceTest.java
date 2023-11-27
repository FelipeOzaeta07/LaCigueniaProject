package LaCiguenia.service.invoice.implement;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.constans.response.invoice.IInvoiceResponse;
import LaCiguenia.commons.domains.entity.invoice.InvoiceEntity;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import LaCiguenia.commons.domains.responseDTO.InformationGeneralInvoice;
import LaCiguenia.component.invoice.implement.InvoiceComponent;
import LaCiguenia.repository.expense.IExpenseRepository;
import LaCiguenia.repository.invoice.IInvoiceRepository;
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

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class InvoiceComplementServiceTest {
    @Mock
    private IInvoiceRepository iInvoiceRepository;
    @Mock
    private InvoiceComponent invoiceComponent;
    private IExpenseRepository iExpenseRepository;
    private InvoiceComplementService invoiceComplementService;
    @BeforeEach
    void setUp() throws Exception{
        MockitoAnnotations.openMocks(this).close();
        invoiceComplementService = new InvoiceComplementService(iInvoiceRepository, invoiceComponent, iExpenseRepository);
    }

    @Test
    void testReadInformationGeneralInvoicesSuccess() {
        List<InvoiceEntity> listInvoice = new ArrayList<>();
        listInvoice.add(new InvoiceEntity());
        listInvoice.add(new InvoiceEntity());

        InformationGeneralInvoice informationGeneralInvoice = new InformationGeneralInvoice();
        when(invoiceComponent.invoiceSalesTotalDay(listInvoice)).thenReturn(100.0);
        when(invoiceComponent.invoiceSalesTotalMonth(listInvoice)).thenReturn(1000.0);
        when(invoiceComponent.invoiceCountTotalMonth(listInvoice)).thenReturn(2);
        when(invoiceComponent.invoiceCountTotalToday(listInvoice)).thenReturn(2);

        when(iInvoiceRepository.findAll()).thenReturn(listInvoice);

        ResponseEntity<GenericResponseDTO> response = invoiceComplementService.readInformationGeneralInvoices(1);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_SUCCESS, response.getBody().getMessage());
        assertEquals(HttpStatus.OK.value(), response.getBody().getStatusCode());

        assertTrue(response.getBody().getObjectResponse() instanceof InformationGeneralInvoice);
        InformationGeneralInvoice result = (InformationGeneralInvoice) response.getBody().getObjectResponse();

        assertEquals(100.0, result.getSalesTotalDay());
        assertEquals(1000.0, result.getSalesTotalMonth());
        assertEquals(2, result.getCountInvoiceMonth());
        assertEquals(2, result.getCountInvoiceDay());

        verify(iInvoiceRepository, times(1)).findAll();
        verify(invoiceComponent, times(1)).invoiceSalesTotalDay(listInvoice);
        verify(invoiceComponent, times(1)).invoiceSalesTotalMonth(listInvoice);
        verify(invoiceComponent, times(1)).invoiceCountTotalMonth(listInvoice);
        verify(invoiceComponent, times(1)).invoiceCountTotalToday(listInvoice);
    }

    @Test
    void testReadInformationGeneralInvoicesFailure() {
        when(iInvoiceRepository.findAll()).thenReturn(new ArrayList<>());

        ResponseEntity<GenericResponseDTO> response = invoiceComplementService.readInformationGeneralInvoices(1);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_FAIL, response.getBody().getMessage());
        assertEquals(IInvoiceResponse.INVOICES_FAIL, response.getBody().getObjectResponse());
        assertEquals(HttpStatus.BAD_REQUEST.value(), response.getBody().getStatusCode());

        verify(iInvoiceRepository, times(1)).findAll();
        verify(invoiceComponent, never()).invoiceSalesTotalDay(any());
        verify(invoiceComponent, never()).invoiceSalesTotalMonth(any());
        verify(invoiceComponent, never()).invoiceCountTotalMonth(any());
        verify(invoiceComponent, never()).invoiceCountTotalToday(any());
    }

    @Test
    void testTotalSalesPreviousDaySuccess() {
        int expectedTotalSales = 500;
        when(iInvoiceRepository.totalSalesPreviousDay()).thenReturn(expectedTotalSales);

        ResponseEntity<GenericResponseDTO> response = invoiceComplementService.totalSalesPreviousDay();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_SUCCESS, response.getBody().getMessage());
        assertEquals(HttpStatus.OK.value(), response.getBody().getStatusCode());

        assertEquals(expectedTotalSales, response.getBody().getObjectResponse());

        verify(iInvoiceRepository, times(1)).totalSalesPreviousDay();
    }

    @Test
    void testTotalSalesPreviousDayFailure() {
        when(iInvoiceRepository.totalSalesPreviousDay()).thenThrow(new RuntimeException("Error en el repositorio"));

        ResponseEntity<GenericResponseDTO> response = invoiceComplementService.totalSalesPreviousDay();

        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        assertEquals(GeneralResponse.INTERNAL_SERVER, response.getBody().getMessage());
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR.value(), response.getBody().getStatusCode());

        assertNull(response.getBody().getObjectResponse());

        verify(iInvoiceRepository, times(1)).totalSalesPreviousDay();
    }
}