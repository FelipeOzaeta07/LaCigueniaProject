package LaCiguenia.repository.material;

import LaCiguenia.commons.domains.entity.material.MaterialEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IMaterialRepository extends JpaRepository<MaterialEntity, Integer> { }