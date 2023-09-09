package LaCiguenia.repository.inventory;

import LaCiguenia.commons.domains.entity.inventory.InventoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface IInventoryRepository extends JpaRepository<InventoryEntity, Integer> {
    @Query(value =  "SELECT p.product_name,i.inventory_id, i.inventory_amount, p.product_price, p.product_code\n" +
                    "FROM product_ciguenia p\n" +
                    "INNER JOIN inventory_ciguenia i ON p.product_code = i.product_code;", nativeQuery = true)
    List<InventoryEntity> queryDetailInventory ();
}