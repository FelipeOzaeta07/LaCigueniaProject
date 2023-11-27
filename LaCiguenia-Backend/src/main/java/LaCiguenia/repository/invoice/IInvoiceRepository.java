package LaCiguenia.repository.invoice;

import LaCiguenia.commons.domains.entity.invoice.InvoiceEntity;
import LaCiguenia.commons.domains.wrapper.IDetailExpenseForPayment;
import LaCiguenia.commons.domains.wrapper.ISalesMethodPaymentWrapper;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface IInvoiceRepository extends JpaRepository<InvoiceEntity, Integer> {
    @Query(value = "SELECT MAX(invoice_id) AS end_id FROM invoice_ciguenia;", nativeQuery = true)
    Integer lastInvoiceId();

    @Query(value =  "SELECT SUM(invoice_total) AS totalInvoice\n" +
                    "FROM invoice_ciguenia\n" +
                    "WHERE invoice_date = DATE_SUB(CURDATE(), INTERVAL 1 DAY);", nativeQuery = true)
    Integer totalSalesPreviousDay();

    @Query(value =  "SELECT pm.payment_method_name AS paymentMethodName, SUM(ic.invoice_total) \n" +
                    "AS totalSales, SUM(ic.invoice_iva) AS totalIva\n" +
                    "FROM invoice_ciguenia ic JOIN payment_method_ciguenia pm \n" +
                    "ON ic.payment_method_id = pm.payment_method_id\n" +
                    "WHERE ic.invoice_status = 'Pagado'" +
                    "AND ic.opening_id = (SELECT MAX(opening_id) FROM opening_ciguenia)\n" +
                    "GROUP BY pm.payment_method_name;", nativeQuery = true)
    List<ISalesMethodPaymentWrapper> salesInvoicesForMethodPayment();

    @Query(value =  "SELECT i.* FROM invoice_ciguenia i LEFT JOIN cash_closure_ciguenia c " +
            "ON i.opening_id = c.opening_id WHERE c.opening_id IS NULL " +
            "AND i.invoice_id = :invoiceId", nativeQuery = true)
    Optional<InvoiceEntity> findInvoiceForOpening(@Param("invoiceId") Integer invoiceId);

    @Query(value =  "SELECT d.payment_method_id AS paymentMethodId, d.payment_method_name AS paymentMethodName, " +
                    "SUM(e.expense_valor) AS paymentMethodSum" +
                    "FROM payment_method_ciguenia d" +
                    "JOIN detail_expense_ciguenia de ON de.payment_method_id = d.payment_method_id " +
                    "JOIN expense_ciguenia e ON de.expense_id = e.expense_id" +
                    "WHERE payment_method_status = 'Activo'" +
                    "GROUP BY d.payment_method_id;", nativeQuery = true)
    List<IDetailExpenseForPayment> valueSalesForPaymentMethod();

    @Query(value =  "SELECT SUM(ic.invoice_total) AS totalSales\n" +
                    "FROM invoice_ciguenia ic JOIN payment_method_ciguenia pm\n" +
                    "ON ic.payment_method_id = pm.payment_method_id\n" +
                    "WHERE ic.invoice_status = 'Pagado' AND ic.payment_method_id = 1 \n" +
                    "AND ic.opening_id = (SELECT MAX(opening_id) FROM opening_ciguenia)\n" +
                    "GROUP BY pm.payment_method_name;", nativeQuery = true)
    Double totalSalesCash();

    @Query(value = "SELECT ic.* FROM invoice_ciguenia ic JOIN opening_ciguenia oc ON oc.opening_id = ic.opening_id  WHERE oc.store_id = :storeId", nativeQuery = true)
    List<InvoiceEntity> InformationGeneralForStore(@Param("storeId") Integer storeId);
}