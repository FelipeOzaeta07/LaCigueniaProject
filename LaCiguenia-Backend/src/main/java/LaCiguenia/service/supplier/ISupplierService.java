package LaCiguenia.service.supplier;

import LaCiguenia.commons.domains.dto.supplier.SupplierDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;

public interface ISupplierService {
    ResponseEntity<GenericResponseDTO> createSupplier(SupplierDTO supplierDTO);
    ResponseEntity<GenericResponseDTO> readSuppliers();
    ResponseEntity<GenericResponseDTO> readLastThreeSuppliers();
    ResponseEntity<GenericResponseDTO> readSupplierForName(String supplierName);
    ResponseEntity<GenericResponseDTO> updateSupplier(SupplierDTO supplierDTO);
    ResponseEntity<GenericResponseDTO> deleteSupplier(Integer supplierId);
}