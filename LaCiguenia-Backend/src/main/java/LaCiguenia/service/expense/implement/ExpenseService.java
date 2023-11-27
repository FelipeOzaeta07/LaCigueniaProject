package LaCiguenia.service.expense.implement;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.constans.response.expense.IExpenseResponse;
import LaCiguenia.commons.converter.expense.ExpenseConverter;
import LaCiguenia.commons.domains.dto.expense.ExpenseDTO;
import LaCiguenia.commons.domains.entity.expense.ExpenseEntity;
import LaCiguenia.commons.domains.entity.opening.OpeningEntity;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import LaCiguenia.repository.expense.IExpenseRepository;
import LaCiguenia.repository.opening.IOpeningRepository;
import LaCiguenia.service.expense.IExpenseService;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Log4j2
public class ExpenseService implements IExpenseService {
    private final IOpeningRepository iOpeningRepository;
    private final IExpenseRepository iExpenseRepository;
    private final ExpenseConverter expenseConverter;

    public ExpenseService(IOpeningRepository iOpeningRepository, IExpenseRepository iExpenseRepository, ExpenseConverter expenseConverter) {
        this.iOpeningRepository = iOpeningRepository;
        this.iExpenseRepository = iExpenseRepository;
        this.expenseConverter = expenseConverter;
    }
    @Override
    public ResponseEntity<GenericResponseDTO> createExpense(ExpenseDTO expenseDTO) {
        try {
            Optional<ExpenseEntity> expenseExist = this.iExpenseRepository.findById(expenseDTO.getExpenseId());
            if (!expenseExist.isPresent()){
                ExpenseEntity expenseEntity = this.expenseConverter.convertExpenseDTOToExpenseEntity(expenseDTO);
                this.iExpenseRepository.save(expenseEntity);
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(GeneralResponse.CREATE_SUCCESS)
                        .objectId(this.iExpenseRepository.lastIdExpense())
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }else {
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(IExpenseResponse.EXPENSE_FAIL)
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
    public ResponseEntity<GenericResponseDTO> readExpenses() {
        try {
            List<ExpenseEntity> listExpenseExist = this.iExpenseRepository.findAll();
            if (!listExpenseExist.isEmpty()){
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(listExpenseExist)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }else {
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(IExpenseResponse.EXPENSE_NO_FIND)
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
    public ResponseEntity<GenericResponseDTO> readExpensesForOpening(Integer storeId) {
        try {
            Double totalExpense = this.iExpenseRepository.findTotalExpenseForDay(storeId);
            if (totalExpense != null){
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(totalExpense)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }else {
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(IExpenseResponse.EXPENSE_FOR_DAY_FAIL)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .build());
            }
        }catch (Exception e){
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
    public ResponseEntity<GenericResponseDTO> readExpensesForCash() {
        try{
            Double totalExpenseCash = this.iExpenseRepository.findTotalExpenseForCash();
            if (totalExpenseCash != null){
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(totalExpenseCash)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }else {
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(IExpenseResponse.EXPENSE_FOR_DAY_FAIL)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .build());
            }
        }catch (Exception e){
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
    public ResponseEntity<GenericResponseDTO> readTotalExpensesMonth(Integer storeId) {
        try {
            Double totalExpenseMonth = this.iExpenseRepository.findTotalExpenseForMonth(storeId);
            if (totalExpenseMonth != null){
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(totalExpenseMonth)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }else {
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(IExpenseResponse.EXPENSE_FOR_MONTH_FAIL)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .build());
            }
        }catch (Exception e){
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
    public ResponseEntity<GenericResponseDTO> deleteExpenses(Integer expenseId) {
        try {
            Optional<ExpenseEntity> expenseExist =
                    this.iExpenseRepository.findExpenseForOpening(expenseId);
            if (expenseExist.isPresent()){
                expenseExist.get().setExpenseStatus("Anulado");
                this.iExpenseRepository.save(expenseExist.get());
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(GeneralResponse.DELETE_SUCCESS)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }else {
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(IExpenseResponse.EXPENSE_NO_FIND)
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