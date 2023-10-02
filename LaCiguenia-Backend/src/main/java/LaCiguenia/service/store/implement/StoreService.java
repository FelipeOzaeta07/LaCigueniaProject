package LaCiguenia.service.store.implement;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.constans.response.product.IProductResponse;
import LaCiguenia.commons.converter.store.StoreConverter;
import LaCiguenia.commons.domains.dto.store.StoreDTO;
import LaCiguenia.commons.domains.entity.store.StoreEntity;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import LaCiguenia.repository.store.IStoreRepository;
import LaCiguenia.service.store.IStoreService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.util.Optional;
import java.util.List;
@Component
@Log4j2
public class StoreService implements IStoreService {
    @Autowired
    private IStoreRepository iStoreRepository;
    @Autowired
    private StoreConverter storeConverter;

    @Override
    public ResponseEntity<GenericResponseDTO> createStore(StoreDTO storeDTO) {
        try {
            Optional<StoreEntity> storeExist = this.iStoreRepository
                    .findById(storeDTO.getStoreId());
            if(!storeExist.isPresent()){
                StoreEntity storeEntity = this.storeConverter.convertStoreDTOToStoreEntity(storeDTO);
                this.iStoreRepository.save(storeEntity);
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(GeneralResponse.CREATE_SUCCESS)
                        .objectId(this.iStoreRepository.lastStoreId())
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }else {
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(IProductResponse.PRODUCT_SUCCESS)
                        .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                        .build());
            }
        }catch (Exception e) {
            log.error(GeneralResponse.INTERNAL_SERVER, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(GenericResponseDTO.builder()
                            .message(GeneralResponse.INTERNAL_SERVER)
                            .objectResponse(null)
                            .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                            .build());
        }
    }

    @Override
    public ResponseEntity<GenericResponseDTO> readStore(StoreDTO storeDTO) {
        try {
            Optional<StoreEntity> storeExist = this.iStoreRepository
                    .findById(storeDTO.getStoreId());
            if(storeExist.isPresent()){
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(storeExist)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }else {
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(IProductResponse.PRODUCT_SUCCESS)
                        .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                        .build());
            }
        }catch (Exception e) {
            log.error(GeneralResponse.INTERNAL_SERVER, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(GenericResponseDTO.builder()
                            .message(GeneralResponse.INTERNAL_SERVER)
                            .objectResponse(null)
                            .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                            .build());
        }
    }

    @Override
    public ResponseEntity<GenericResponseDTO> readStores() {
        try {
            List<StoreEntity> listStoreEntity = this.iStoreRepository.findStoreEnabled();
            if(!listStoreEntity.isEmpty()){
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(listStoreEntity)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }else {
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(IProductResponse.PRODUCT_SUCCESS)
                        .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                        .build());
            }
        }catch (Exception e) {
            log.error(GeneralResponse.INTERNAL_SERVER, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(GenericResponseDTO.builder()
                            .message(GeneralResponse.INTERNAL_SERVER)
                            .objectResponse(null)
                            .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                            .build());
        }
    }

    @Override
    public ResponseEntity<GenericResponseDTO> updateStore(StoreDTO storeDTO) {
        try {
            Optional<StoreEntity> storeExist = this.iStoreRepository
                    .findById(storeDTO.getStoreId());
            if(storeExist.isPresent()){
                StoreEntity storeEntity = this.storeConverter.convertStoreDTOToStoreEntity(storeDTO);
                this.iStoreRepository.save(storeEntity);
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(GeneralResponse.UPDATE_SUCCESS)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }else {
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(null)
                        .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                        .build());
            }
        }catch (Exception e) {
            log.error(GeneralResponse.INTERNAL_SERVER, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(GenericResponseDTO.builder()
                            .message(GeneralResponse.INTERNAL_SERVER)
                            .objectResponse(null)
                            .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                            .build());
        }
    }

    @Override
    public ResponseEntity<GenericResponseDTO> deleteStore(Integer storeId) {
        try {
            Optional<StoreEntity> storeExist = this.iStoreRepository.findById(storeId);
            if(storeExist.isPresent()){
                storeExist.get().setStoreStatus("Borrado");
                this.iStoreRepository.save(storeExist.get());
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(GeneralResponse.DELETE_SUCCESS)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }else {
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(null)
                        .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                        .build());
            }
        }catch (Exception e) {
            log.error(GeneralResponse.INTERNAL_SERVER, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(GenericResponseDTO.builder()
                            .message(GeneralResponse.INTERNAL_SERVER)
                            .objectResponse(null)
                            .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                            .build());
        }
    }
}