package LaCiguenia.repository.expense;

import LaCiguenia.commons.domains.entity.expense.ExpenseEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.Optional;

public interface IExpenseRepository extends JpaRepository<ExpenseEntity, Integer> {
    @Query(value =  "SELECT i.* FROM expense_ciguenia i\n" +
            "LEFT JOIN cash_closure_ciguenia c ON i.opening_id = c.opening_id\n" +
            "WHERE c.opening_id IS NULL AND i.expense_id = ?\n", nativeQuery = true)
    Optional<ExpenseEntity> findExpenseForOpening(@Param("expenseId") Integer expenseId);
    @Query(value =  "SELECT *\n" +
            "FROM expense_ciguenia\n" +
            "ORDER BY expense_id DESC\n" +
            "LIMIT 1;", nativeQuery = true )
    Integer lastIdExpense();

    @Query(value =  "SELECT SUM(i.expense_value) FROM expense_ciguenia i\n" +
                    "LEFT JOIN cash_closure_ciguenia c ON i.opening_id = c.opening_id\n" +
                    "WHERE c.opening_id IS NULL ORDER BY i.opening_id DESC;", nativeQuery = true)
    Double findTotalExpenseForDay();
}