package LaCiguenia.repository.invoice;

import LaCiguenia.commons.domains.entity.invoice.InvoiceEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IInvoiceRepository extends JpaRepository<InvoiceEntity, Integer> {
    @Query(value = "SELECT MAX(invoice_id) AS end_id FROM invoice_ciguenia;", nativeQuery = true)
    Integer lastInvoiceId();

    @Query(value =  "SELECT SUM(invoice_total) AS totalInvoice\n" +
                    "FROM invoice_ciguenia\n" +
                    "WHERE invoice_date = DATE_SUB(CURDATE(), INTERVAL 1 DAY);", nativeQuery = true)
    Integer totalSalesPreviousDay();
}