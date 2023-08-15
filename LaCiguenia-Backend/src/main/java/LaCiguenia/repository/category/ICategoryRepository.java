package LaCiguenia.repository.category;

import LaCiguenia.commons.domains.entity.category.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICategoryRepository extends JpaRepository<CategoryEntity, Integer> {
}
