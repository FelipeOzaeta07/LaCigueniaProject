package LaCiguenia.repository.invoice;

import LaCiguenia.commons.domains.entity.invoice.InvoiceEntity;

import java.time.LocalDate;
import java.util.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IInvoiceRepository extends JpaRepository<InvoiceEntity, Integer> {
    @Query(value = "SELECT * FROM invoice_ciguenia WHERE invoice_date = :day", nativeQuery = true)
    List<InvoiceEntity> findByDateDay(@Param("day") LocalDate dateCurrent);

    @Query(value = "SELECT * FROM invoice_ciguenia WHERE MONTH (invoice_date) = :month", nativeQuery = true)
    List<InvoiceEntity> findByDateMonth(@Param("month") Integer dateCurrent);
}