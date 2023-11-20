package LaCiguenia.webApi.inventory;

import LaCiguenia.commons.domains.dto.inventory.InventoryDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public interface IInventoryApi {
    @PostMapping()
    ResponseEntity<GenericResponseDTO> createInventory(@RequestBody InventoryDTO inventoryDTO);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readInventory(@RequestBody InventoryDTO inventoryDTO);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readInventories();
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readInventoriesRecentlyCreate();
    @PutMapping()
    ResponseEntity<GenericResponseDTO> updateInventory(@RequestBody InventoryDTO inventoryDTO);

    @PutMapping()
    ResponseEntity<GenericResponseDTO> updateInventoryForPay(@RequestBody InventoryDTO inventoryDTO);
    @DeleteMapping()
    ResponseEntity<GenericResponseDTO> deleteInventory(@PathVariable Integer inventoryId);
}