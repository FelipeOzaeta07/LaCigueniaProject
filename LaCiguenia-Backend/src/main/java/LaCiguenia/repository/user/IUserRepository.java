package LaCiguenia.repository.user;

import LaCiguenia.commons.domains.entity.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<UserEntity, Integer> { }