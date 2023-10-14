package LaCiguenia.repository.cashclosure;

import LaCiguenia.commons.domains.entity.cashclosure.CashClosureEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.Optional;

public interface ICashClosureRepository extends JpaRepository<CashClosureEntity, Integer> {

    @Query(value =  "SELECT *\n" +
                    "FROM cash_closure_ciguenia\n" +
                    "ORDER BY cash_closure_id DESC\n" +
                    "LIMIT 1;", nativeQuery = true)
    Optional<CashClosureEntity> lastFindCashClosure();
}
