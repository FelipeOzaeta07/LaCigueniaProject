package LaCiguenia.repository.detail;

import LaCiguenia.commons.domains.entity.detail.DetailEntity;
import LaCiguenia.commons.domains.wrapper.DetailProductForInvoice;
import LaCiguenia.commons.domains.wrapper.DetailProductSoldDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IDetailRepository  extends JpaRepository<DetailEntity, Integer> {
    @Query(value =  "SELECT p.product_id AS productId, p.product_name AS productName, p.product_price AS productPrice,\n" +
                    "p.product_description AS productDescription, p.category_id AS categoryId, ct.category_name AS categoryName,\n" +
                    "IFNULL(SUM(di.detail_amount), 0) AS totalDetailAmount, IFNULL(iq.inventory_amount, 0) AS inventoryAmount\n" +
                    "FROM product_ciguenia p\n" +
                    "LEFT JOIN detail_invoice_ciguenia di ON p.product_id = di.product_id\n" +
                    "LEFT JOIN invoice_ciguenia i ON di.invoice_id = i.invoice_id AND DATE(i.invoice_date) = CURDATE()\n" +
                    "LEFT JOIN category_ciguenia ct ON p.category_id = ct.category_id\n" +
                    "LEFT JOIN opening_ciguenia op ON i.opening_id = op.opening_id\n" +
                    "LEFT JOIN store_ciguenia sc ON sc.store_id = op.store_id\n" +
                    "LEFT JOIN (SELECT product_id, SUM(inventory_amount) AS inventory_amount FROM inventory_ciguenia\n" +
                    "GROUP BY product_id ) AS iq ON p.product_id = iq.product_id\n" +
                    "WHERE p.product_status = 'Habilitado' AND op.store_id = :storeId AND i.invoice_status = 'Pagado'  \n" +
                    "GROUP BY p.product_id, p.product_name, p.product_price, p.product_iva, p.product_cost,\n" +
                    "p.product_description, p.product_status, p.category_id\n" +
                    "ORDER BY totalDetailAmount DESC\n" +
                    "LIMIT 4;", nativeQuery = true)
    List<DetailProductSoldDTO> detailProductoMoreSold(@Param("storeId") Integer storeId);

    @Query(value =  "SELECT ic.invoice_id AS invoiceId, ic.invoice_date AS invoiceDate,\n" +
                    "cc.customer_name AS customerName, cc.customer_identification AS customerIdentification,\n" +
                    "cc.customer_phone_number AS customerPhone, cc.customer_email AS customerEmail,\n" +
                    "pc.product_name AS productName, pc.product_price AS productPrice, di.detail_amount AS detailAmount,\n" +
                    "di.detail_subtotal AS detailSubtotal, pc.product_iva AS productIva,\n" +
                    "ic.invoice_iva AS invoiceIva, ic.invoice_total AS invoiceTotal, pmc.payment_method_name AS invoicePay\n" +
                    "FROM invoice_ciguenia ic JOIN customer_ciguenia cc ON ic.customer_id = cc.customer_id\n" +
                    "JOIN detail_invoice_ciguenia di ON ic.invoice_id = di.invoice_id\n" +
                    "JOIN product_ciguenia pc ON di.product_id = pc.product_id\n" +
                    "JOIN payment_method_ciguenia pmc ON pmc.payment_method_id = ic.payment_method_id\n" +
                    "WHERE ic.invoice_id = :invoiceId", nativeQuery = true)
    List<DetailProductForInvoice> detailProductForInvoices(@Param("invoiceId") Integer invoiceId);
}