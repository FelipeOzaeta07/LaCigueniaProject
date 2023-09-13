package LaCiguenia.repository.product;

import LaCiguenia.commons.domains.entity.product.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

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
}