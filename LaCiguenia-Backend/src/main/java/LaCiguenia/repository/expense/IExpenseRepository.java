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

    @Query(value =  "SELECT SUM(i.expense_value)\n" +
            "FROM expense_ciguenia i\n" +
            "LEFT JOIN cash_closure_ciguenia c ON i.opening_id = c.opening_id\n" +
            "LEFT JOIN opening_ciguenia oc ON i.opening_id = oc.opening_id\n" +
            "WHERE c.opening_id IS NULL\n" +
            "  AND oc.store_id = :storeId\n" +
            "ORDER BY i.opening_id DESC;", nativeQuery = true)
    Double findTotalExpenseForDay(@Param("storeId") Integer storeId);

    @Query(value =  "SELECT SUM(ec.expense_value)\n" +
                    "FROM expense_ciguenia ec\n" +
                    "JOIN opening_ciguenia op ON ec.opening_id = op.opening_id\n" +
                    "WHERE ec.payment_method_id = 1\n" +
                    "AND op.opening_id = (SELECT MAX(opening_id) FROM opening_ciguenia);", nativeQuery = true)
    Double findTotalExpenseForCash();

    @Query(value =  "SELECT SUM(expense_value) AS total_gastos\n" +
                    "FROM expense_ciguenia ec\n" +
                    "JOIN opening_ciguenia oc ON oc.opening_id = ec.opening_id\n" +
                    "WHERE YEAR(expense_date) = YEAR(CURRENT_DATE)\n" +
                    "AND MONTH(expense_date) = MONTH(CURRENT_DATE)\n" +
                    "AND oc.store_id = :storeId", nativeQuery = true)
    Double findTotalExpenseForMonth(@Param("storeId") Integer storeId);
}