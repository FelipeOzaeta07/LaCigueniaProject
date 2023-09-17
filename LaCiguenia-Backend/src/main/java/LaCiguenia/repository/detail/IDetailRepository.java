package LaCiguenia.repository.detail;

import LaCiguenia.commons.domains.entity.detail.DetailEntity;
import LaCiguenia.commons.domains.wrapper.DetailProductSoldDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface IDetailRepository  extends JpaRepository<DetailEntity, Integer> {
    @Query(value =  "SELECT p.product_id AS productId, p.product_name AS productName, p.product_price AS productPrice, \n" +
                    "p.product_description AS productDescription, p.category_id AS categoryId, ct.category_name AS categoryName,\n" +
                    "IFNULL(SUM(di.detail_amount), 0) AS totalDetailAmount, IFNULL(iq.inventory_amount, 0) AS inventoryAmount\n" +
                    "FROM product_ciguenia p\n" +
                    "LEFT JOIN detail_invoice_ciguenia di ON p.product_id = di.product_id\n" +
                    "LEFT JOIN invoice_ciguenia i ON di.invoice_id = i.invoice_id AND DATE(i.invoice_date) = CURDATE()\n" +
                    "LEFT JOIN category_ciguenia ct ON p.category_id = ct.category_id\n" +
                    "LEFT JOIN (SELECT product_id, SUM(inventory_amount) AS inventory_amount FROM inventory_ciguenia\n" +
                    "GROUP BY product_id ) AS iq ON p.product_id = iq.product_id\n" +
                    "WHERE p.product_status = 'Habilitado'\n" +
                    "GROUP BY p.product_id, p.product_name, p.product_price, p.product_iva, p.product_cost,\n" +
                    "p.product_description, p.product_status, p.category_id\n" +
                    "ORDER BY totalDetailAmount DESC\n" +
                    "LIMIT 4;", nativeQuery = true)
    List<DetailProductSoldDTO> detailProductoMoreSold();
}