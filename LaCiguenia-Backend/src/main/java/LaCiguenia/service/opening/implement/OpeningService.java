package LaCiguenia.service.opening.implement;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.constans.response.opening.IOpeningResponse;
import LaCiguenia.commons.converter.opening.OpeningConverter;
import LaCiguenia.commons.converter.store.StoreConverter;
import LaCiguenia.commons.domains.dto.opening.OpeningDTO;
import LaCiguenia.commons.domains.dto.store.StoreDTO;
import LaCiguenia.commons.domains.entity.opening.OpeningEntity;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import LaCiguenia.repository.opening.IOpeningRepository;
import LaCiguenia.service.opening.IOpeningService;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
@Log4j2
public class OpeningService implements IOpeningService {


    private final IOpeningRepository iOpeningRepository;
    private final OpeningConverter openingConverter;
    private final StoreConverter storeConverter;

    public OpeningService(IOpeningRepository iOpeningRepository, OpeningConverter openingConverter, StoreConverter storeConverter) {
        this.iOpeningRepository = iOpeningRepository;
        this.openingConverter = openingConverter;
        this.storeConverter = storeConverter;
    }

    @Override
    public ResponseEntity<GenericResponseDTO> createOpening(OpeningDTO openingDTO) {
        try {
            Optional<OpeningEntity> openingExist =
                    this.iOpeningRepository.findById(openingDTO.getOpeningId());
            if (!openingExist.isPresent()){
                OpeningEntity openingEntity =
                        this.openingConverter.convertOpeningDTOToOpeningEntity(openingDTO);
                this.iOpeningRepository.save(openingEntity);
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(GeneralResponse.CREATE_SUCCESS)
                        .objectId(this.iOpeningRepository.lastOpeningId())
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }else {
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(IOpeningResponse.OPENING_SUCCESS)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
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
    public ResponseEntity<GenericResponseDTO> readLastOpening() {
        try {
            Optional<OpeningEntity> openingExist =
                    this.iOpeningRepository.findByLastOpening();
            if (openingExist.isPresent()){
                OpeningDTO openingDTO = this.openingConverter.convertOpeningEntityToOpeningDTO(openingExist.get());
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(openingDTO)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }else {
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(IOpeningResponse.OPENING_SUCCESS)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
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
