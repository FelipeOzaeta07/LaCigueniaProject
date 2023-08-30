package LaCiguenia.webApi.invoice.complement;

import LaCiguenia.commons.constans.endpoints.invoice.IInvoiceEndPoint;
import LaCiguenia.commons.constans.response.user.IUserResponse;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import LaCiguenia.service.invoice.complement.InvoiceComplementService;
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
@RequestMapping(IInvoiceEndPoint.BASE_URL_INVOICE_MONTH_DAY)
@Tag(name = "Sistema de Gestión de facturas por mes y por dia",
        description = "Ops de Leer facturas por dia y mes")
@Log4j2
public class InvoiceComplementApi implements IInvoiceComplementApi {

    private final InvoiceComplementService invoiceComplementService;

    public InvoiceComplementApi(InvoiceComplementService invoiceComplementService) {
        this.invoiceComplementService = invoiceComplementService;
    }


    @Override
    @Operation(summary = "Leer factura por dia")
    @ApiResponses(value = {
            @ApiResponse(responseCode  = "200", description = IUserResponse.AUTENTIFICATION_SUCESS,
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = GenericResponseDTO.class))}),
            @ApiResponse(responseCode  = "400", description = IUserResponse.AUTENTIFICACION_FAIL,
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = String.class))}),
            @ApiResponse(responseCode  = "404", description = IUserResponse.USER_FAIL,
                    content = {@Content(mediaType = "application/json")}),
            @ApiResponse(responseCode  = "500", description = IUserResponse.USER_SUCCESS,
                    content = {@Content(mediaType = "application/json")})})
    @GetMapping(IInvoiceEndPoint.READ_INVOICE_DAY)
    public ResponseEntity<GenericResponseDTO> readInvoicesDay() {
       return this.invoiceComplementService.readSalesTotalInvoicesDay();
    }

    @Override
    @Operation(summary = "Leer factura por mes")
    @ApiResponses(value = {
            @ApiResponse(responseCode  = "200", description = IUserResponse.AUTENTIFICATION_SUCESS,
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = GenericResponseDTO.class))}),
            @ApiResponse(responseCode  = "400", description = IUserResponse.AUTENTIFICACION_FAIL,
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = String.class))}),
            @ApiResponse(responseCode  = "404", description = IUserResponse.USER_FAIL,
                    content = {@Content(mediaType = "application/json")}),
            @ApiResponse(responseCode  = "500", description = IUserResponse.USER_SUCCESS,
                    content = {@Content(mediaType = "application/json")})})
    @GetMapping(IInvoiceEndPoint.READ_INVOICE_MONTH)
    public ResponseEntity<GenericResponseDTO> readInvoicesMonth() {
        return this.invoiceComplementService.readSalesTotalInvoiceMonth();
    }

    @Override
    @Operation(summary = "Leer cantidad de facturas por mes")
    @ApiResponses(value = {
            @ApiResponse(responseCode  = "200", description = IUserResponse.AUTENTIFICATION_SUCESS,
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = GenericResponseDTO.class))}),
            @ApiResponse(responseCode  = "400", description = IUserResponse.AUTENTIFICACION_FAIL,
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = String.class))}),
            @ApiResponse(responseCode  = "404", description = IUserResponse.USER_FAIL,
                    content = {@Content(mediaType = "application/json")}),
            @ApiResponse(responseCode  = "500", description = IUserResponse.USER_SUCCESS,
                    content = {@Content(mediaType = "application/json")})})
    @GetMapping(IInvoiceEndPoint.READ_INVOICE_TOTAL)
    public ResponseEntity<GenericResponseDTO> readTotalInvoices() {
        return this.invoiceComplementService.readCountTotalInvoiceMonth();
    }
}
