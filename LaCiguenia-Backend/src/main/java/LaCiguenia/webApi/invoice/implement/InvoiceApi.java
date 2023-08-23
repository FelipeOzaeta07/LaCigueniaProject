package LaCiguenia.webApi.invoice.implement;

import LaCiguenia.commons.constans.endpoints.invoice.IInvoiceEndPoint;
import LaCiguenia.commons.constans.response.user.IUserResponse;
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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(IInvoiceEndPoint.BASE_URL_INVOICE)
@Tag(name = "Sistema de Gestión de facturas", description = "Ops de autenticar, crear, eliminar y actualizar facturas")
@Log4j2
public class InvoiceApi implements IInvoiceApi {

    private final InvoiceService invoiceService;

    public InvoiceApi(InvoiceService invoiceService) {
        this.invoiceService = invoiceService;
    }

    @Override
    @Operation(summary = "leer todas las facturas")
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
    @GetMapping(IInvoiceEndPoint.READ_INVOICES)
    public ResponseEntity<GenericResponseDTO> readInvoices()
    {return this.invoiceService.readInvoices();
    }

}
