package LaCiguenia.webApi.detailExpense;

import LaCiguenia.commons.domains.dto.detailExpense.DetailExpenseDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public interface IDetailExpenseApi {
    @PostMapping()
    ResponseEntity<GenericResponseDTO> createDetailExpense(@RequestBody DetailExpenseDTO detailExpenseDTO);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readDetailsExpense();
    @DeleteMapping()
    ResponseEntity<GenericResponseDTO> deleteDetailExpense(@PathVariable Integer detailExpenseId);
}