package LaCiguenia.webApi.expense;

import LaCiguenia.commons.domains.dto.expense.ExpenseDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public interface IExpenseApi {
    @PostMapping()
    ResponseEntity<GenericResponseDTO> createExpense(@RequestBody ExpenseDTO expenseDTO);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readExpenses();
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readExpensesForOpening(@PathVariable Integer storeId);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readExpensesForCash();
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readTotalExpensesMonth(@PathVariable Integer storeId);
    @DeleteMapping()
    ResponseEntity<GenericResponseDTO> deleteExpenses(@PathVariable Integer expenseId);
}