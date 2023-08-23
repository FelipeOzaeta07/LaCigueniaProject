package LaCiguenia.repository.product;

import LaCiguenia.commons.domains.entity.product.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProductRepository extends JpaRepository<ProductEntity, Integer> { }