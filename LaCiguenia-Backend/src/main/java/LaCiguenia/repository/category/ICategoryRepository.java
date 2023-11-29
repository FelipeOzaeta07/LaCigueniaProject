package LaCiguenia.repository.category;

import LaCiguenia.commons.domains.entity.category.CategoryEntity;
import LaCiguenia.commons.domains.entity.product.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ICategoryRepository extends JpaRepository<CategoryEntity, Integer> {

    @Query(value = "SELECT * FROM category_ciguenia WHERE category_status = 'Activa';", nativeQuery = true)
    List<CategoryEntity> listCategoryActive();
}