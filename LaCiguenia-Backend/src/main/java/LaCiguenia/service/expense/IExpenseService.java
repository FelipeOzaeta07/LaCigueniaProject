package LaCiguenia.service.expense;

import LaCiguenia.commons.domains.dto.expense.ExpenseDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;

public interface IExpenseService {
    ResponseEntity<GenericResponseDTO> createExpense(ExpenseDTO expenseDTO);
    ResponseEntity<GenericResponseDTO> readExpenses();
    ResponseEntity<GenericResponseDTO> readExpensesForOpening();
    ResponseEntity<GenericResponseDTO> readExpensesForCash();
    ResponseEntity<GenericResponseDTO> readTotalExpensesMonth();
    ResponseEntity<GenericResponseDTO> deleteExpenses(Integer expenseId);
}