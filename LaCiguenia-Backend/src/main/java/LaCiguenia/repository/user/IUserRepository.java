package LaCiguenia.repository.user;

import LaCiguenia.commons.domains.entity.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface IUserRepository extends JpaRepository<UserEntity, Integer> {
    @Override
    Optional<UserEntity> findById(Integer integer);
    List<UserEntity> findByUsuarioEmail(String usuarioEmail);
}