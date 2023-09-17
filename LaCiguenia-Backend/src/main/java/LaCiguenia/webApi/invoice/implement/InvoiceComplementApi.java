package LaCiguenia.webApi.invoice.implement;

import LaCiguenia.commons.constans.endpoints.invoice.IInvoiceEndPoint;
import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import LaCiguenia.service.invoice.IInvoiceComplementService;
import LaCiguenia.webApi.invoice.IInvoiceComplementApi;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(IInvoiceEndPoint.BASE_URL_INVOICE)
@Tag(name = "Sistema de Gestión de Ventas Total", description = "Visualizar la Ventas totales por Mes y Día")
@Log4j2
public class InvoiceComplementApi implements IInvoiceComplementApi {

    private final IInvoiceComplementService iInvoiceComplementService;

    public InvoiceComplementApi(IInvoiceComplementService iInvoiceComplementService) {
        this.iInvoiceComplementService = iInvoiceComplementService;
    }

    @Override
    @Operation(summary = "leer todas las Facturas")
    @ApiResponses(value = {
            @ApiResponse(responseCode  = "200", description = GeneralResponse.CREATE_SUCCESS,
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = GenericResponseDTO.class))}),
            @ApiResponse(responseCode  = "400", description = GeneralResponse.CREATE_FAIL,
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = String.class))}),
            @ApiResponse(responseCode  = "404", description = GeneralResponse.NOT_FOUND,
                    content = {@Content(mediaType = "application/json")}),
            @ApiResponse(responseCode  = "500", description = GeneralResponse.INTERNAL_SERVER,
                    content = {@Content(mediaType = "application/json")})})
    @GetMapping(IInvoiceEndPoint.READ_INVOICES_MONTH_DAY)
    public ResponseEntity<GenericResponseDTO> readInformationGeneralInvoices() {
        return this.iInvoiceComplementService.readInformationGeneralInvoices();
    }
}
