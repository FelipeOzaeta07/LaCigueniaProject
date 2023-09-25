package LaCiguenia.webApi.invoice.implement;

import LaCiguenia.commons.constans.endpoints.invoice.IInvoiceEndPoint;
import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.constans.response.user.IUserResponse;
import LaCiguenia.commons.domains.dto.invoice.InvoiceDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import LaCiguenia.service.invoice.implement.InvoiceService;
import LaCiguenia.webApi.invoice.IInvoiceApi;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(IInvoiceEndPoint.BASE_URL_INVOICE)
@Tag(name = "Sistema de Gestión de Factura", description = "Crear, visualizar, eliminar y actualizar Factura")
@Log4j2
public class InvoiceApi implements IInvoiceApi {

    private final InvoiceService invoiceService;

    public InvoiceApi(InvoiceService invoiceService) {
        this.invoiceService = invoiceService;
    }

    @Override
    @Operation(summary = "Crear una nueva Factura")
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
    @PostMapping(IInvoiceEndPoint.CREATE_INVOICE)
    public ResponseEntity<GenericResponseDTO> createInvoice(@RequestBody InvoiceDTO invoiceDTO) {
        return this.invoiceService.createInvoice(invoiceDTO);
    }

    @Override
    @Operation(summary = "leer una Factura")
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
    @GetMapping(IInvoiceEndPoint.READ_INVOICE)
    public ResponseEntity<GenericResponseDTO> readInvoice(InvoiceDTO invoiceDTO) {
        return this.invoiceService.readInvoice(invoiceDTO);
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
    @GetMapping(IInvoiceEndPoint.READ_INVOICES)
    public ResponseEntity<GenericResponseDTO> readInvoices() {
        return this.invoiceService.readInvoices();
    }

    @Override
    @Operation(summary = "Actualizar una Factura")
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
    @PutMapping(IInvoiceEndPoint.UPDATE_INVOICE)
    public ResponseEntity<GenericResponseDTO> updateInvoice(InvoiceDTO invoiceDTO) {
        return this.invoiceService.updateInvoice(invoiceDTO);
    }

    @Override
    @Operation(summary = "Eliminar una Factura")
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
    @DeleteMapping(IInvoiceEndPoint.DELETE_INVOICE)
    public ResponseEntity<GenericResponseDTO> deleteInvoice(@PathVariable Integer invoiceId) {
        return this.invoiceService.deleteInvoice(invoiceId);
    }
}