package LaCiguenia.repository.product;

import LaCiguenia.commons.domains.entity.invoice.InvoiceEntity;
import LaCiguenia.commons.domains.entity.product.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;

public interface IProductRepository extends JpaRepository<ProductEntity, Integer> {
        @Query(value = "SELECT pc.product_id, pc.product_name, pc.product_price, pc.product_description, pc.inventory_id, pc.category_id, SUM(dic.detail_amount) AS suma_detail FROM product_ciguenia pc JOIN detail_invoice_ciguenia dic ON pc.product_id = dic.product_id JOIN invoice_ciguenia ic ON dic.invoice_id = ic.invoice_id WHERE DATE(ic.invoice_date) = '2023-09-04' GROUP BY pc.product_id, pc.product_name, pc.product_price, pc.product_description, pc.category_id, pc.inventory_id ORDER BY suma_detail DESC LIMIT 4;", nativeQuery = true)
        List<ProductEntity> findByDateDay(@Param("day") Date day);
}