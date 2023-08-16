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
    @PutMapping()
    ResponseEntity<GenericResponseDTO> updateInventory(@RequestBody InventoryDTO inventoryDTO);
    @DeleteMapping()
    ResponseEntity<GenericResponseDTO> deleteInventory(@RequestBody InventoryDTO inventoryDTO);
}
