package LaCiguenia.webApi.supplier.implement;

import LaCiguenia.commons.constans.endpoints.supplier.ISupplierEndPoint;
import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.domains.dto.supplier.SupplierDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import LaCiguenia.service.supplier.implement.SupplierService;
import LaCiguenia.webApi.supplier.ISupplierApi;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(ISupplierEndPoint.BASE_URL_SUPPLIER)
@Tag(name = "Sistema de Gestión de proovedores", description = "Crear, Visualizar, Actualizar y Eliminar un proveedor")
public class SupplierApi implements ISupplierApi {

    private final SupplierService supplierService;

    public SupplierApi(SupplierService supplierService) {this.supplierService = supplierService;}

    @Override
    @Operation(summary = "Crear un nuevo Proveedor")
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
    @PostMapping(ISupplierEndPoint.CREATE_SUPPLIER)
    public ResponseEntity<GenericResponseDTO> createSupplier(@RequestBody SupplierDTO supplierDTO) {
        return this.supplierService.createSupplier(supplierDTO);
    }

    @Override
    @Operation(summary = "Leer todos los proveedores")
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
    @GetMapping(ISupplierEndPoint.READ_SUPPLIERS)
    public ResponseEntity<GenericResponseDTO> readSuppliers() {
        return this.supplierService.readSuppliers();
    }

    @Override
    @Operation(summary = "Leer los tres ultimos proveedores creados")
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
    @GetMapping(ISupplierEndPoint.READ_THREE_LAST_SUPPLIERS)
    public ResponseEntity<GenericResponseDTO> readLastThreeSuppliers() {
        return this.supplierService.readLastThreeSuppliers();
    }

    @Override
    @Operation(summary = "Leer los tres ultimos proveedores creados")
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
    @GetMapping(ISupplierEndPoint.READ_SUPPLIER_NAME)
    public ResponseEntity<GenericResponseDTO> readSupplierForName(@PathVariable String supplierName) {
        return this.supplierService.readSupplierForName(supplierName);
    }

    @Override
    @Operation(summary = "Actualizar un proveedor")
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
    @PutMapping(ISupplierEndPoint.UPDATE_SUPPLIER)
    public ResponseEntity<GenericResponseDTO> updateSupplier(@RequestBody SupplierDTO supplierDTO) {
        return this.supplierService.updateSupplier(supplierDTO);
    }

    @Override
    @Operation(summary = "Eliminar un proveedor")
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
    @DeleteMapping(ISupplierEndPoint.DELETE_SUPPLIER)
    public ResponseEntity<GenericResponseDTO> deleteSupplier(@PathVariable Integer supplierId) {
        return this.supplierService.deleteSupplier(supplierId);
    }
}