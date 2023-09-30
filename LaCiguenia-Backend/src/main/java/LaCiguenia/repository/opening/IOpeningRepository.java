package LaCiguenia.repository.opening;

import LaCiguenia.commons.domains.entity.opening.OpeningEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface IOpeningRepository extends JpaRepository<OpeningEntity, Integer> {
    @Query(value = "SELECT MAX(opening_id) AS end_id FROM opening_ciguenia;", nativeQuery = true)
    Integer lastOpeningId();

    @Query(value =  "SELECT *\n" +
                    "FROM opening_ciguenia\n" +
                    "ORDER BY opening_id DESC\n" +
                    "LIMIT 1;", nativeQuery = true)
    Optional<OpeningEntity> findByLastOpening();
}