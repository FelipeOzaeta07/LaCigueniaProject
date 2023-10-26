package LaCiguenia.webApi.detailExpense.implement;

import LaCiguenia.commons.constans.endpoints.detailExpense.IDetailExpenseEndPoint;
import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.domains.dto.detailExpense.DetailExpenseDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import LaCiguenia.service.detailExpense.implement.DetailExpenseService;
import LaCiguenia.webApi.detailExpense.IDetailExpenseApi;
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
@RequestMapping(IDetailExpenseEndPoint.BASE_URL_DETAIL_EXPENSE)
@Tag(name = "Sistema de Gestión de Detalle de gastos", description = "Crear, visualizar y eliminar Detalle de gastos")
@Log4j2
public class DetailExpenseApi implements IDetailExpenseApi {

    private final DetailExpenseService detailExpenseService;

    public DetailExpenseApi(DetailExpenseService detailExpenseService) {this.detailExpenseService = detailExpenseService;}

    @Override
    @Operation(summary = "Crear un nuevo Detalle de gastos")
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
    @PostMapping(IDetailExpenseEndPoint.CREATE_DETAIL_EXPENSE)
    public ResponseEntity<GenericResponseDTO> createDetailExpense(DetailExpenseDTO detailExpenseDTO) {
        return this.detailExpenseService.createDetailExpense(detailExpenseDTO);
    }

    @Override
    @Operation(summary = "Leer todos los detalles de los gatos")
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
    @GetMapping(IDetailExpenseEndPoint.READ_DETAILS_EXPENSE)
    public ResponseEntity<GenericResponseDTO> readDetailsExpense() {
        return this.detailExpenseService.readDetailsExpense();
    }

    @Override
    @Operation(summary = "Eliminar un detalle de gasto")
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
    @PostMapping(IDetailExpenseEndPoint.DELETE_DETAIL_EXPENSE)
    public ResponseEntity<GenericResponseDTO> deleteDetailExpense(@PathVariable Integer detailExpenseId) {
        return this.detailExpenseService.deleteDetailExpense(detailExpenseId);
    }
  /*  @Override
    @Operation(summary = "Leer un gasto segun el metoo de pago")
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
    @GetMapping(IDetailExpenseEndPoint.READ_DETAIL_EXPENSE_FOR_PAYMENT)
    public ResponseEntity<GenericResponseDTO> readDetailExpenseForPaymentMethod() {
        return this.detailExpenseService.readDetailExpenseForPaymentMethod();
    }*/
}