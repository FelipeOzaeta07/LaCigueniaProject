package LaCiguenia.repository.detailExpense;

import LaCiguenia.commons.domains.entity.detailExpense.DetailExpenseEntity;
import LaCiguenia.commons.domains.wrapper.IDetailExpenseForPayment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IDetailExpenseRepository extends JpaRepository<DetailExpenseEntity, Integer> {
    @Query(value =  "SELECT d.payment_method_id AS paymentMethodId, d.payment_method_name AS paymentMethodName, " +
                    "SUM(e.expense_valor) AS paymentMethodSum" +
                    "FROM payment_method_ciguenia d" +
                    "JOIN detail_expense_ciguenia de ON de.payment_method_id = d.payment_method_id " +
                    "JOIN expense_ciguenia e ON de.expense_id = e.expense_id" +
                    "WHERE payment_method_status = 'Activo'" +
                    "GROUP BY d.payment_method_id;", nativeQuery = true)
    List<IDetailExpenseForPayment> valueExpenseForPaymentMethod();
}