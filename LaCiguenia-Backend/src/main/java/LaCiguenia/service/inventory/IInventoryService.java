package LaCiguenia.service.inventory;

import LaCiguenia.commons.domains.dto.inventory.InventoryDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

public interface IInventoryService {
    ResponseEntity<GenericResponseDTO> createInventory(InventoryDTO inventoryDTO);
    ResponseEntity<GenericResponseDTO> readInventory(InventoryDTO inventoryDTO);
    ResponseEntity<GenericResponseDTO> readInventories();
    ResponseEntity<GenericResponseDTO> readInventoriesRecentlyCreate();
    ResponseEntity<GenericResponseDTO> updateInventory(InventoryDTO inventoryDTO);
    ResponseEntity<GenericResponseDTO> updateInventoryForPay(InventoryDTO inventoryDTO);
    ResponseEntity<GenericResponseDTO> deleteInventory(Integer inventoryId);
}