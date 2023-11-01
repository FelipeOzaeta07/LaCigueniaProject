package LaCiguenia.webApi.cashclosure.implement;

import LaCiguenia.commons.constans.endpoints.cashclosure.ICashClosureEndPoint;
import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.domains.dto.cashclosure.CashClosureDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import LaCiguenia.service.cashclosure.implement.CashClosureService;
import LaCiguenia.webApi.cashclosure.ICashClosureApi;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(ICashClosureEndPoint.BASE_URL_CASH_CLOSURE)
@Tag(name = "Sistema de Gestión de Cierres de Caja", description = "Crear, visualizar, eliminar y actualizar Cierres de Caja")
@Log4j2
public class CashClosureApi implements ICashClosureApi {

    private final CashClosureService cashClosureService;

    public CashClosureApi(CashClosureService cashClosureService) {
        this.cashClosureService = cashClosureService;
    }

    @Override
    @Operation(summary = "Crear un nuevo Cierre de Caja")
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
    @PostMapping(ICashClosureEndPoint.CREATE_CASH_CLOSURE)
    public ResponseEntity<GenericResponseDTO> createCashClosure(CashClosureDTO cashClosureDTO) {
        return this.cashClosureService.createCashClosure(cashClosureDTO);
    }

    @Override
    @Operation(summary = "Leer un Cierre de Caja")
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
    @GetMapping(ICashClosureEndPoint.READ_CASH_CLOSURE)
    public ResponseEntity<GenericResponseDTO> readCashClosure(Integer cashClosureId) {
        return this.cashClosureService.readCashClosure(cashClosureId);
    }

    @Override
    @Operation(summary = "Leer todos los Cierres de Caja")
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
    @GetMapping(ICashClosureEndPoint.READ_CASH_CLOSURES)
    public ResponseEntity<GenericResponseDTO> readCashClosures() {
        return this.cashClosureService.readCashClosures();
    }

    @Override
    @Operation(summary = "Leer el Ultimo Cierre de Caja")
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
    @GetMapping(ICashClosureEndPoint.READ_LAST_CASH_CLOSURES)
    public ResponseEntity<GenericResponseDTO> readLastCashClosures() {
        return this.cashClosureService.readLastCashClosures();
    }

    @Override
    @Operation(summary = "Informacion para realizar Cierre de Caja")
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
    @GetMapping(ICashClosureEndPoint.READ_INFORMATION_CASH_CLOSURE)
    public ResponseEntity<GenericResponseDTO> informationForCashClosures() {
        return this.cashClosureService.informationForCashClosures();
    }

    @Override
    @Operation(summary = "Detalle de informacion Metodo de Pago para realizar Cierre de Caja")
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
    @GetMapping(ICashClosureEndPoint.READ_DETAIL_INFORMATION_CASH_CLOSURE)
    public ResponseEntity<GenericResponseDTO> detailMethodPaymentForCashClosures() {
        return this.cashClosureService.detailMethodPaymentForCashClosures();
    }
}