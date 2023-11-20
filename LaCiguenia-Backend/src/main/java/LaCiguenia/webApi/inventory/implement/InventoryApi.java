package LaCiguenia.webApi.inventory.implement;

import LaCiguenia.commons.constans.endpoints.inventory.IInventoryEndPoint;
import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.domains.dto.inventory.InventoryDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import LaCiguenia.service.inventory.implement.InventoryService;
import LaCiguenia.webApi.inventory.IInventoryApi;
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
@RequestMapping(IInventoryEndPoint.BASE_URL_INVENTORY)
@Tag(name = "Sistema de Gestión de Inventario", description = "Crear, visualizar, eliminar y actualizar Inventario")
@Log4j2
public class InventoryApi implements IInventoryApi {

    private final InventoryService inventoryService;

    public InventoryApi(InventoryService inventoryService) {
        this.inventoryService = inventoryService;
    }

    @Override
    @Operation(summary = "Crear un nuevo Inventario")
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
    @PostMapping(IInventoryEndPoint.CREATE_INVENTORY)
    public ResponseEntity<GenericResponseDTO> createInventory(@RequestBody InventoryDTO inventoryDTO) {
        return this.inventoryService.createInventory(inventoryDTO);
    }

    @Override
    @Operation(summary = "Leer un Inventario")
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
    @GetMapping(IInventoryEndPoint.READ_INVENTORY)
    public ResponseEntity<GenericResponseDTO> readInventory(@RequestBody InventoryDTO inventoryDTO) {
        return this.inventoryService.readInventory(inventoryDTO);
    }

    @Override
    @Operation(summary = "Leer todos los Inventarios")
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
    @GetMapping(IInventoryEndPoint.READ_INVENTORIES)
    public ResponseEntity<GenericResponseDTO> readInventories() {
        return this.inventoryService.readInventories();
    }

    @Override
    @Operation(summary = "Leer los Inventarios Recientemente Creados")
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
    @GetMapping(IInventoryEndPoint.READ_INVENTORIES_RECENTLY_CREATE)
    public ResponseEntity<GenericResponseDTO> readInventoriesRecentlyCreate() {
        return this.inventoryService.readInventoriesRecentlyCreate();
    }

    @Override
    @Operation(summary = "Actualizar un Inventario")
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
    @PutMapping(IInventoryEndPoint.UPDATE_INVENTORY)
    public ResponseEntity<GenericResponseDTO> updateInventory(@RequestBody InventoryDTO inventoryDTO) {
        return this.inventoryService.updateInventory(inventoryDTO);
    }

    @Override
    @Operation(summary = "Actualizar un Inventario por Compra")
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
    @PutMapping(IInventoryEndPoint.UPDATE_PAY_INVENTORY)
    public ResponseEntity<GenericResponseDTO> updateInventoryForPay(InventoryDTO inventoryDTO) {
        return this.inventoryService.updateInventoryForPay(inventoryDTO);
    }

    @Override
    @Operation(summary = "Eliminar un Inventario")
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
    @DeleteMapping(IInventoryEndPoint.DELETE_INVENTORY)
    public ResponseEntity<GenericResponseDTO> deleteInventory(@PathVariable Integer inventoryId) {
        return this.inventoryService.deleteInventory(inventoryId);
    }
}