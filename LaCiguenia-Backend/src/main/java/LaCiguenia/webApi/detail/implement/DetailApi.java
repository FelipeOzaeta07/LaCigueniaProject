package LaCiguenia.webApi.detail.implement;

import LaCiguenia.commons.constans.endpoints.detail.IDetailEndPoint;
import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.domains.dto.detail.DetailDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import LaCiguenia.service.detail.IDetailService;
import LaCiguenia.webApi.detail.IDetailApi;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(IDetailEndPoint.BASE_URL_DETAIL)
@Tag(name = "Sistema de Gestión de detalles de facturacion",
        description = "Ops de autenticar, crear, eliminar y actualizar detalles de facturacion")
@Log4j2
public class DetailApi implements IDetailApi {

    private final IDetailService iDetailService;

    public DetailApi(IDetailService iDetailService) {
        this.iDetailService = iDetailService;
    }


    @Override
    @Operation(summary = "Crear un nuevo detalles de factura")
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
    @PostMapping(IDetailEndPoint.CREATE_DETAIL)
    public ResponseEntity<GenericResponseDTO> createDetail(DetailDTO detailDTO) {
        return this.iDetailService.createDetail(detailDTO);
    }

    @Override
    @Operation(summary = "Leer un detalle de factura")
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
    @PostMapping(IDetailEndPoint.READ_DETAIL)
    public ResponseEntity<GenericResponseDTO> readDetail(DetailDTO detailDTO) {
        return this.iDetailService.readDetail(detailDTO);
    }

    @Override
    @Operation(summary = "Leer todos los detalles de factura")
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
    @PostMapping(IDetailEndPoint.READ_DETAILS)
    public ResponseEntity<GenericResponseDTO> readDetails() {
        return this.iDetailService.readDetails();
    }

    @Override
    @Operation(summary = "actualizar un detalle de factura")
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
    @PostMapping(IDetailEndPoint.UPDATE_DETAIL)
    public ResponseEntity<GenericResponseDTO> updateDetail(DetailDTO detailDTO) {
        return this.iDetailService.updateDetail(detailDTO);
    }

    @Override
    @Operation(summary = "Eliminar un detalle de factura")
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
    @PostMapping(IDetailEndPoint.DELETE_DETAIL)
    public ResponseEntity<GenericResponseDTO> deleteDetail(@PathVariable Integer detailId) {
        return this.iDetailService.deleteDetail(detailId);
    }
}