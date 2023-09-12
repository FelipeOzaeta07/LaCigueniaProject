package LaCiguenia.repository.invoice;

import LaCiguenia.commons.domains.entity.invoice.InvoiceEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface IInvoiceRepository extends JpaRepository<InvoiceEntity, Integer> {
    @Query(value = "SELECT MAX(invoice_id) AS end_id FROM invoice_ciguenia;", nativeQuery = true)
    Integer lastInvoiceId();
}