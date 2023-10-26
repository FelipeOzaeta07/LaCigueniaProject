package LaCiguenia.service.detailExpense;

import LaCiguenia.commons.domains.dto.detailExpense.DetailExpenseDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;

public interface IDetailExpenseService {
    ResponseEntity<GenericResponseDTO> createDetailExpense(DetailExpenseDTO detailExpenseDTO);
    ResponseEntity<GenericResponseDTO> readDetailsExpense();
    ResponseEntity<GenericResponseDTO> deleteDetailExpense(Integer detailExpenseId);
}