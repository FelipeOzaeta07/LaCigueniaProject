package LaCiguenia.repository.product;

import LaCiguenia.commons.domains.entity.product.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.List;

public interface IProductRepository extends JpaRepository<ProductEntity, Integer> {
    Optional<ProductEntity> findByProductName(String productName);
    @Query (value = "SELECT *\n" +
                    "FROM product_ciguenia\n" +
                    "WHERE product_status = 'Habilitado'\n" +
                    "ORDER BY product_id DESC\n" +
                    "LIMIT 3;", nativeQuery = true)
    List<ProductEntity> findProductRecentlyCreate();
    @Query (value = "SELECT * FROM product_ciguenia WHERE product_status = 'Habilitado'", nativeQuery = true)
    List<ProductEntity> findProductsEnabled();
    @Query(value = "SELECT MAX(product_id) AS end_id FROM product_ciguenia;", nativeQuery = true)
    Integer lastProductId();
    // Felipe Ozaeta Historia de usuario Sena - 099 19/09/2023
    @Query(value = "SELECT * FROM product_ciguenia WHERE product_name LIKE CONCAT('%', :product_name, '%');", nativeQuery = true)
    List<ProductEntity> findByProductNameStartingWith(@Param("product_name") String productName);
}