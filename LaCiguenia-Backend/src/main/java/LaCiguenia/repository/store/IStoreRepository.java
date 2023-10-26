package LaCiguenia.repository.store;

import LaCiguenia.commons.domains.entity.store.StoreEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface IStoreRepository extends JpaRepository<StoreEntity, Integer> {
    @Query(value = "SELECT * FROM store_ciguenia WHERE store_status = 'Habilitado'", nativeQuery = true)
    List<StoreEntity> findStoreEnabled();

    @Query(value = "SELECT MAX(store_id) AS end_id FROM store_ciguenia; ", nativeQuery = true)
    Integer lastStoreId();
}