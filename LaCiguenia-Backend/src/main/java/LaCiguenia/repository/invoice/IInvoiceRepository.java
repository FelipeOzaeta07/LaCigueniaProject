package LaCiguenia.repository.invoice;

import LaCiguenia.commons.domains.entity.invoice.InvoiceEntity;
import LaCiguenia.commons.domains.entity.product.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IInvoiceRepository extends JpaRepository<InvoiceEntity, Integer> {
    @Query(value = "SELECT MAX(invoice_id) AS end_id FROM invoice_ciguenia;", nativeQuery = true)
    Integer lastInvoiceId();

    @Query (value = "SELECT * FROM invoice_ciguenia WHERE invoice_status = 'Habilitado'", nativeQuery = true)
    List<InvoiceEntity> findInvoiceEnabled();
}