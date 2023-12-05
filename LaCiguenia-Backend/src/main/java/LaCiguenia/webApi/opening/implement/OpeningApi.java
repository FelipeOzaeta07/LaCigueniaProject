package LaCiguenia.webApi.opening.implement;

import LaCiguenia.commons.constans.endpoints.opening.IOpeningEndPoint;
import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.domains.dto.opening.OpeningDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import LaCiguenia.service.opening.implement.OpeningService;
import LaCiguenia.webApi.opening.IOpeningApi;
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
@RequestMapping(IOpeningEndPoint.BASE_URL_OPENING)
@Tag(name = "Sistema de Gestión de Apertura", description = "Crear, visualizar, eliminar y actualizar Apertura")
@Log4j2
public class OpeningApi implements IOpeningApi {

    private final OpeningService openingService;

    public OpeningApi(OpeningService openingService) {
        this.openingService = openingService;
    }

    @Override
    @Operation(summary = "Crear una nueva Apertura")
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
    @PostMapping(IOpeningEndPoint.CREATE_OPENING)
    public ResponseEntity<GenericResponseDTO> createOpening(@RequestBody OpeningDTO openingDTO) {
        return this.openingService.createOpening(openingDTO);
    }

    @Override
    @Operation(summary = "Leer la ultima Apertura")
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
    @GetMapping(IOpeningEndPoint.READ_LAST_OPENING)
    public ResponseEntity<GenericResponseDTO> readLastOpening() {
        return this.openingService.readLastOpening();
    }
}