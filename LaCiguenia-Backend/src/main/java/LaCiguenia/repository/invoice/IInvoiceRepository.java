package LaCiguenia.repository.invoice;

import LaCiguenia.commons.domains.entity.invoice.InvoiceEntity;

import java.sql.Date;
import java.time.LocalDate;
import java.util.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface IInvoiceRepository extends JpaRepository<InvoiceEntity, Integer> {

    /* LocalDate dateCurrent = LocalDate.now();
    @Query(value = "SELECT * FROM invoice_ciguenia WHERE invoice_date = dateCurrent", nativeQuery = true)
    List<InvoiceEntity> findByDate(); */
}