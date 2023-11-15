package LaCiguenia.webApi.supplier;

import LaCiguenia.commons.domains.dto.supplier.SupplierDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public interface ISupplierApi {
    @PostMapping
    ResponseEntity<GenericResponseDTO> createSupplier(@RequestBody SupplierDTO supplierDTO);
    @GetMapping
    ResponseEntity<GenericResponseDTO> readSuppliers();
    @GetMapping
    ResponseEntity<GenericResponseDTO> readLastThreeSuppliers();
    @GetMapping
    ResponseEntity<GenericResponseDTO> readSupplierForName(@PathVariable String supplierName);
    @PutMapping
    ResponseEntity<GenericResponseDTO> updateSupplier(@RequestBody SupplierDTO supplierDTO);
    @DeleteMapping
    ResponseEntity<GenericResponseDTO> deleteSupplier(@PathVariable Integer supplierId);
}
