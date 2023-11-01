package LaCiguenia.service.detailExpense.implement;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.constans.response.detailExpense.IDetailExpenseResponse;
import LaCiguenia.commons.converter.detailExpense.DetailExpenseConverter;
import LaCiguenia.commons.domains.dto.detailExpense.DetailExpenseDTO;
import LaCiguenia.commons.domains.entity.detailExpense.DetailExpenseEntity;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import LaCiguenia.repository.detailExpense.IDetailExpenseRepository;
import LaCiguenia.service.detailExpense.IDetailExpenseService;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Log4j2
public class DetailExpenseService  implements IDetailExpenseService {

    private final IDetailExpenseRepository iDetailExpenseRepository;
    private final DetailExpenseConverter detailExpenseConverter;

    public DetailExpenseService(IDetailExpenseRepository iDetailExpenseRepository, DetailExpenseConverter detailExpenseConverter) {
        this.iDetailExpenseRepository = iDetailExpenseRepository;
        this.detailExpenseConverter = detailExpenseConverter;
    }

    @Override
    public ResponseEntity<GenericResponseDTO> createDetailExpense(DetailExpenseDTO detailExpenseDTO) {
        try {
            Optional<DetailExpenseEntity> detailExpenseExist =
                    this.iDetailExpenseRepository.findById(detailExpenseDTO.getDetailExpenseId());
            if (!detailExpenseExist.isPresent()){
                DetailExpenseEntity detailExpenseEntity =
                        this.detailExpenseConverter.convertDetailDTOToDetailEntity(detailExpenseDTO);
                this.iDetailExpenseRepository.save(detailExpenseEntity);
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(GeneralResponse.CREATE_SUCCESS)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }else {
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(IDetailExpenseResponse.DETAIL_EXPENSE_SUCCESS)
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
    public ResponseEntity<GenericResponseDTO> readDetailsExpense() {
        try {
            List<DetailExpenseEntity> listDetailExpenseEntity = this.iDetailExpenseRepository.findAll();
            if (!listDetailExpenseEntity.isEmpty()){
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(listDetailExpenseEntity)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }else {
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(IDetailExpenseResponse.DETAIL_EXPENSE_FAIL)
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
    public ResponseEntity<GenericResponseDTO> deleteDetailExpense(Integer detailExpenseId) {
        {
            try {
                Optional<DetailExpenseEntity> detailExpenseExist =
                        this.iDetailExpenseRepository.findById(detailExpenseId);
                if (detailExpenseExist.isPresent()){
                    this.iDetailExpenseRepository.deleteById(detailExpenseId);
                    return ResponseEntity.ok(GenericResponseDTO.builder()
                            .message(GeneralResponse.OPERATION_SUCCESS)
                            .objectResponse(GeneralResponse.DELETE_SUCCESS)
                            .statusCode(HttpStatus.OK.value())
                            .build());
                }else {
                    return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                            .message(GeneralResponse.OPERATION_FAIL)
                            .objectResponse(IDetailExpenseResponse.DETAIL_EXPENSE_FAIL)
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
}