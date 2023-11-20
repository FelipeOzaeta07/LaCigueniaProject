package LaCiguenia.repository.user;

import LaCiguenia.commons.domains.entity.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;
import java.util.Optional;

public interface IUserRepository extends JpaRepository<UserEntity, Integer> {
    @Query(value = "SELECT * FROM user_ciguenia WHERE user_id = :userId OR user_email = :userEmail", nativeQuery = true)
    Optional<UserEntity> findUserForEmail(@Param("userId") Integer UserId, @Param("userEmail") String userEmail);

    @Query(value = "SELECT * FROM user_ciguenia uc WHERE uc.user_status = 'Habilitado';", nativeQuery = true)
    List<UserEntity> findUsers();
}