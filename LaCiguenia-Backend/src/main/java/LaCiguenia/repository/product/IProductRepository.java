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
    @Query(value = "SELECT * FROM product_ciguenia WHERE product_name LIKE CONCAT(:product_name);", nativeQuery = true)
    Optional<ProductEntity> readProductForName(@Param("product_name") String productName);

    @Query(value =  "SELECT pc.*\n" +
                    "FROM product_ciguenia pc\n" +
                    "JOIN category_ciguenia cc ON pc.category_id = cc.category_id\n" +
                    "WHERE cc.category_id = :category_id\n" +
                    "AND pc.product_status = 'Habilitado';", nativeQuery = true)
    List<ProductEntity> readProductForCategory(@Param("category_id") Integer categoryId);
}