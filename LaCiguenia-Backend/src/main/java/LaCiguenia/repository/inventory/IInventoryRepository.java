package LaCiguenia.repository.inventory;

import LaCiguenia.commons.domains.entity.inventory.InventoryEntity;
import LaCiguenia.commons.domains.entity.product.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface IInventoryRepository extends JpaRepository<InventoryEntity, Integer> {
    @Query(value =  "SELECT p.product_name,i.inventory_id, i.inventory_amount, p.product_price, p.product_code\n" +
                    "FROM product_ciguenia p\n" +
                    "INNER JOIN inventory_ciguenia i ON p.product_code = i.product_code;", nativeQuery = true)
    List<InventoryEntity> detailInventory ();
    @Query (value = "SELECT i.*\n" +
                    "FROM inventory_ciguenia i\n" +
                    "INNER JOIN product_ciguenia p ON i.product_id = p.product_id\n" +
                    "WHERE p.product_status = 'habilitado'\n" +
                    "ORDER BY i.inventory_id DESC\n" +
                    "LIMIT 3;", nativeQuery = true)
    List<InventoryEntity> findInventoriesRecentlyCreate();
    @Query (value = "SELECT i.*\n" +
                    "FROM inventory_ciguenia i\n" +
                    "INNER JOIN product_ciguenia p ON i.product_id = p.product_id\n" +
                    "WHERE p.product_status = 'habilitado';", nativeQuery = true)
    List<InventoryEntity> findInventories();
}