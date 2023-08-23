package LaCiguenia.repository.detail;

import LaCiguenia.commons.domains.entity.detail.DetailEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IDetailRepository  extends JpaRepository<DetailEntity, Integer> { }