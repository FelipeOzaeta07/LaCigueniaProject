package LaCiguenia.repository.opening;

import LaCiguenia.commons.domains.entity.opening.OpeningEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IOpeningRepository extends JpaRepository<OpeningEntity, Integer> { }