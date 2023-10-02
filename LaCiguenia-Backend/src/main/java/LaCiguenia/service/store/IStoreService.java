package LaCiguenia.service.store;

import LaCiguenia.commons.domains.dto.store.StoreDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;

public interface IStoreService {
    ResponseEntity<GenericResponseDTO> createStore(StoreDTO storeDTO);
    ResponseEntity<GenericResponseDTO> readStore(StoreDTO storeDTO);
    ResponseEntity<GenericResponseDTO> readStores();
    ResponseEntity<GenericResponseDTO> updateStore(StoreDTO storeDTO);
    ResponseEntity<GenericResponseDTO> deleteStore(Integer  storeId);
}
