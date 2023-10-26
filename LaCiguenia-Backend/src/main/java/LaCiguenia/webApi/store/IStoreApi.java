package LaCiguenia.webApi.store;

import LaCiguenia.commons.domains.dto.store.StoreDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public interface IStoreApi {
    @PostMapping()
    ResponseEntity<GenericResponseDTO> createStore(@RequestBody StoreDTO storeDTO);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readStore(@PathVariable Integer storeId);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readStores();
    @PutMapping()
    ResponseEntity<GenericResponseDTO> updateStore(@RequestBody StoreDTO storeDTO);
    @DeleteMapping()
    ResponseEntity<GenericResponseDTO> deleteStore(@PathVariable Integer storeId);
}