package LaCiguenia.webApi.payment.implement;

import LaCiguenia.commons.constans.endpoints.payment.IPaymentMethodEndPoint;
import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.domains.dto.payment.PaymentMethodDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import LaCiguenia.service.payment.implement.PaymentMethodService;
import LaCiguenia.webApi.payment.IPaymentMethodApi;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.*;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(IPaymentMethodEndPoint.BASE_URL_PAYMENT_METHOD)
@Tag(name = "Sistema de Gestión de Metodos de Pago", description = "Crear, visualizar y eliminar un Metodo de Pago")
@Log4j2
public class PaymentMethodApi implements IPaymentMethodApi {
    private final PaymentMethodService paymentMethodService;
    public PaymentMethodApi(PaymentMethodService paymentMethodService) {
        this.paymentMethodService = paymentMethodService;
    }

    @Override
    @Operation(summary = "Crear un nuevo Metodo de Pago")
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
    @PostMapping(IPaymentMethodEndPoint.CREATE_PAYMENT_METHOD)
    public ResponseEntity<GenericResponseDTO> createPaymentMethod(@RequestBody PaymentMethodDTO paymentMethodDTO) {
        return this.paymentMethodService.createPaymentMethod(paymentMethodDTO);
    }

    @Override
    @Operation(summary = "Leer todos los Metodos de Pago")
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
    @GetMapping(IPaymentMethodEndPoint.READ_PAYMENT_METHODS)
    public ResponseEntity<GenericResponseDTO> readPaymentMethods() {
        return this.paymentMethodService.readPaymentMethods();
    }

    @Override
    @Operation(summary = "Eliminar un Metodo de Pago")
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
    @PostMapping(IPaymentMethodEndPoint.DELETE_PAYMENT_METHOD)
    public ResponseEntity<GenericResponseDTO> deletePaymentMethod(@PathVariable Integer PaymentMethodId) {
        return this.paymentMethodService.deletePaymentMethod(PaymentMethodId);
    }
}