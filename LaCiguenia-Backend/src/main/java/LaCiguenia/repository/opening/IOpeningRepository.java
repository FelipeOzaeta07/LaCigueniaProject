package LaCiguenia.repository.opening;

import LaCiguenia.commons.domains.entity.opening.OpeningEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface IOpeningRepository extends JpaRepository<OpeningEntity, Integer> {
    @Query(value = "SELECT MAX(opening_id) AS end_id FROM opening_ciguenia;", nativeQuery = true)
    Integer lastOpeningId();
}